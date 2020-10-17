import { connectToDatabase } from './db'

const getCards = async () => {
  const { db } = await connectToDatabase()
  const data = await db.collection("cards").find().toArray()
  const cards = data.map((card) => {
    return {
      name: card.name,
      release_date: card.release_date,
      category: card.category
    }
  })
  console.log(cards)
  return cards
}

export default getCards
