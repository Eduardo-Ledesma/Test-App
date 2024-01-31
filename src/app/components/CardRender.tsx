import Image from "next/image"
import { Card } from "@/types/cardTypes"

interface CardRenderProps {
  cards: Card[];
}

const CardRender = ({ cards }: { cards: Card[] }) => {
  
  return (
    <section className="px-4 mx-auto max-w-[1900px]">
      <div className="max-w-[1600px]">
        <h2 className="text-categoryTitle leading-categoryTitle font-bold text-main-text">Find talent by category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          { cards && cards.map((card: Card) => (
            <div key={card.id} className="h-64">
              <Image src={card.picture} alt={card.title} width={385} height={202} className="rounded-lg h-52 max-w-96 w-full" />
              <p className="text-gray-medium text-xl p-[10px] font-medium">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardRender