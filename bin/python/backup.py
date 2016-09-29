#!/usr/bin/python
# -*- coding: utf-8 -*-
import boto3
import os

s3 = boto3.resource('s3')
bucket = s3.Bucket('swostatic')
os.chdir('scss/swog')

for filename in os.listdir('.'):
    #dovresti controllare se è una dir oppure no perchè da errore
    bucket.put_object(
        Key=filename,
        Body=open(filename, 'rb')
    )
    print 'Backed up ' + filename
