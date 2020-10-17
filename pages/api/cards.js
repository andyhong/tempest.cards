import { connectToDatabase } from '../../utils/db'

export default async (req, res) => {
  const { db } = await connectToDatabase()
  const cards = await db.collection("cards").find().toArray()
  if (cards) {
    res.status(200).json(cards)
  } else {
    res.status(400).json({ success: false })
  }
}
