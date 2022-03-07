import { connectToDatabase } from './db'

const other = ["other_sports", "non_sport"]
const categories = {
  baseball: "⚾",
  basketball: "🏀",
  football: "🏈",
  hockey: "🏒",
  other: "🃏",
  gaming: "🎮",
}

const getCards = async () => {
  const { db } = await connectToDatabase()
  const data = await db.collection("cards").find().toArray()
  const cards = data
    .map(card => {
      return other.includes(card.category)
        ? { ...card, category: "other" }
        : { ...card }
    })
    .map(card => {
      return {
        ...card,
        name: `${categories[card.category]} ${card.name}`,
        date: new Date(card.release_date)
      }
    })
    // .filter(card => card.date >= Date.now())
    .sort((a, b) => a.date - b.date)
    .map((card) => {
      return {
        name: card.name,
        release_date: card.release_date,
        category: card.category
      }
  })

  const columns = Object.keys(categories).sort()

  return { cards, columns }
}

export default getCards
