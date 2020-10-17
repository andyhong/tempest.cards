import { connectToDatabase } from '../../utils/db'

export default async (req, res) => {
  const { db } = await connectToDatabase()
  await db.collection("cards").find().toArray((err, cards) => {
    if (err) {
      console.log(err)
      res.status(400).json({ success: false })
    }
    res.status(200).json(cards)
  })
}
