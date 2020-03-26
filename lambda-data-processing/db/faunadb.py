import os
from faunadb import query as q
from faunadb.client import FaunaClient

class FaunaDB:
  def __init__(self, database="Balthus", collection="domains"):
    self.database = database
    self.collection = collection

    FAUNA_SECRET = os.getenv("FAUNA_SECRET")
    self.client = FaunaClient(secret=FAUNA_SECRET)

    try:
      self.client.query(q.create_database({"name": database}))
    except:
      print("Database: {} already exist".format(database))
    ref = self.client.query(
      q.create_key(
        {"database": q.database(database), "role": "server"}
      ))

    self.client = FaunaClient(secret=ref['secret'])
    try:
      self.client.query(q.create_collection({"name": collection}))
    except:
      print("Collection: {} already exist".format(collection))

  def fill_collection(self, records):
    self.client.query(
      q.map_(
        lambda data: q.create(
          q.collection(self.collection),
          {"data": data}
        ),
        records
      ))

