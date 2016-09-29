#!/usr/bin/python
# -*- coding: utf-8 -*-
import json

import boto3

s3 = boto3.resource('s3')
obj = s3.Object('swostatic', 'pocketprova/css/bootstrap.css')
data = obj.get()['Body'].read()
d = json.loads(data)
