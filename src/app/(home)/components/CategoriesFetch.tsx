import { Card } from "@/app/(home)/types/cardTypes"
import CardRender from "./CardRender"

const getCategories = async (): Promise<Card[] | false> => {
    try {
      const res = await fetch(`${process.env.DATABASE_URL}/cards`)
      const cards: Card[] = await res.json()
      return cards
    } catch (error) {
      return false
    }
  }

const CategoriesFetch = async () => {

  const cards = await getCategories()

  return (
    <>
      { cards ? <CardRender {...{cards}} /> : 'Loading'}
    </>
  )
}
export default CategoriesFetch