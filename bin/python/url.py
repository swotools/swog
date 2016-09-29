#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import argparse
import os.path
import logging
import sys


logger = logging.getLogger()
s3 = boto3.resource('s3')
client = boto3.client('s3')


def bucket_exists(bucket):
    try:
        s3.meta.client.head_bucket(Bucket=bucket)
        return True
    except:
        logger.exception('HEAD request to bucket {} failed'.format(bucket))
        return False


def generate_presigned_put_url(bucket, dir, filename, expires=3600):
    key = os.path.join(dir, filename)
    if not bucket_exists(bucket):
        return None
    else:
        return client.generate_presigned_url(
            'put_object',
            Params={'Bucket': bucket, 'Key': key},
            ExpiresIn=expires)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--bucket', '-b', required=True)
    parser.add_argument('--dir', '-d', required=True)
    parser.add_argument('--filename', '-f', required=True)
    args = parser.parse_args()

    url = generate_presigned_put_url(
        bucket=args.bucket,
        dir=args.dir,
        filename=args.filename)

    if url:
        # Generates URL like:
        # https://bucket.s3.amazonaws.com/dir/file?Signature=v%2signaturestuff&AWSAccessKeyId=ACCESSKEY&Expires=1442237425
        print(url)
    else:
        sys.exit(1)
