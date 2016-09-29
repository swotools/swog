#!/usr/bin/python
# -*- coding: utf-8 -*-
""" test communicating with aws using boto3 """
import json
import sys
import os

import boto3
import botocore

BUCKET = 'swostatic'
#PREFIX = 'data/v1'
PREFIX = 'mario'

def bucket_exists(bucketname):
    """ check if a bucket exists on S3 (should not throw error) """
    s3resource = boto3.resource('s3')
    s3resource.Bucket(bucketname)
    exists = True
    try:
        s3resource.meta.client.head_bucket(Bucket=bucketname)
    except botocore.exceptions.ClientError as error:
        # If a client error is thrown, then check that it was a 404 error.
        # If it was a 404 error, then the bucket does not exist.
        error_code = int(error.response['Error']['Code'])
        if error_code == 404:
            exists = False
        else:
            print error
            sys.exit(1)
    return exists


def store_object(bucket, key, filepath):
    """ store object in bucket """
    s3resource = boto3.resource('s3')
    s3resource.Object(bucket, key).put(Body=open(filepath, 'rb'))


def get_object(bucket, key):
    """ get object from bucket """
    s3resource = boto3.resource('s3')
    return s3resource.Object(bucket, key).get()


def delete_object(bucket, key):
    """ delete object in bucket """
    s3resource = boto3.resource('s3')
    s3resource.Object(bucket, key).delete()


def bucket_contents(bucketname):
    """ list contents of bucket """
    s3resource = boto3.resource('s3')
    bucket = s3resource.Bucket(bucketname)
    for key in bucket.objects.all():
        print key


def main():
    """ main function """
    bucket = BUCKET
    key = os.path.join(PREFIX, 'sample.json')
    print key
    print
    filepath = 'sample.json'
    if not bucket_exists(bucket):
        print "bucket {0} does not exists".format(bucket)
    print "print current contents of bucket"
    bucket_contents(bucket)
    print
    print "store object print contents"
    store_object(bucket, key, filepath)
    bucket_contents(bucket)
    print
    print "get object: " + key
    s3object = get_object(bucket, key)
    sample = json.loads(s3object['Body'].read())
    print "json keys: " + str(sample.keys())
    print
    print "delete object and print contents"
    delete_object(bucket, key)
    bucket_contents(bucket)


if __name__ == '__main__':
    main()
