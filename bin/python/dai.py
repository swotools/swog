#!/usr/bin/python
# -*- coding: utf-8 -*-


import boto3
import sys
# Let's use Amazon S3
s3 = boto3.resource('s3')
for bucket in s3.buckets.all():
    print(bucket.name)

# Upload a new file
#data = open('readme.md', 'rb')
#s3.Bucket('swostatic').put_object(Key='readme.md', Body=data)

print 'Stampo valori contenuti nel bucket swostatic..'
bucket = s3.Bucket('swostatic')
for obj in bucket.objects.all():
    print(obj.key)

print 'Stampo le dir contenute in un bucket...'
client = boto3.client('s3')
paginator = client.get_paginator('list_objects')
result = paginator.paginate(Bucket='la42', Delimiter='/')
for prefix in result.search('CommonPrefixes'):
    print(prefix.get('Prefix'))
