import { MongoClient } from 'mongodb'

let cachedMongoClient = null
let cachedDb = null

export async function connectToDatabase() {

  if (cachedMongoClient && cachedDb) {
    return { client: cachedMongoClient, db: cachedDb }
  }

  const client = await MongoClient.connect(
    process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )

  const db = client.db("tempest")

  cachedMongoClient = client
  cachedDb = db

  return { client, db }
}
