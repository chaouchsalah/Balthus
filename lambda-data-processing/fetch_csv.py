import boto3
import os

def fetch_csv():
  AWS_ACCESS_KEY_ID = os.getenv("ACCESS_KEY_ID")
  AWS_SECRET_ACCESS_KEY = os.getenv("SECRET_ACCESS_KEY")
  REGION_NAME = os.getenv("REGION_NAME")
  BUCKET_NAME = os.getenv("BUCKET_NAME")
  client = boto3.client('s3', aws_access_key_id=AWS_ACCESS_KEY_ID,
      aws_secret_access_key=AWS_SECRET_ACCESS_KEY)
  object_key = 'Page View.csv'
  csv_obj = client.get_object(Bucket=BUCKET_NAME, Key=object_key)
  body = csv_obj['Body']
  csv_string = body.read().decode('utf-8')

  return csv_string
