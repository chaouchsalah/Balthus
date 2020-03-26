import json
import urllib.parse
from pandas import DataFrame, read_csv
import pandas as pd
from io import StringIO
from slice_df import slice_df
from fetch_csv import fetch_csv
from db.faunadb import FaunaDB

def lambda_handler(event, context):
  csv_string = fetch_csv()
  df = pd.read_csv(StringIO(csv_string), index_col="Page")

  filtered_df = DataFrame(df.filter(regex='/http[s]:', axis=0))

  sorted_values = filtered_df.sort_values(by="Page").reset_index()

  summation = sorted_values.groupby(slice_df(sorted_values)).sum().reset_index()

  records = list(summation.to_dict('records'))

  fauna_db = FaunaDB()

  fauna_db.fill_collection(records)

  return "success"
