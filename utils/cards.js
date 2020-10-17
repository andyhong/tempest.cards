import fetch from 'isomorphic-unfetch'

const getCards = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cards`)
  const json = await response.json()
  return json
}

export default getCards
