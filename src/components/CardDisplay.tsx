import type { ScryfallCard } from '../types/ScryfallCard'
import { addToInventory } from '../lib/inventoryManager'

interface CardDisplayProps {
  card: ScryfallCard
}

export default function CardDisplay({ card }: CardDisplayProps) {
  const handleAddToInventory = () => {
    addToInventory(card)
  }

  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={card.image_uris?.normal}
        alt={card.name}
        className="mb-2"
      />

      <h3 className="font-bold">{card.name}</h3>
      <p>{card.mana_cost}</p>
      <p>{card.type_line}</p>
      <p className="text-sm text-gray-500">
        {card.oracle_text}
      </p>

      <button
        className="py-2 px-4 rounded-lg bg-primary m-2 text-white"
        onClick={handleAddToInventory}
      >
        +
      </button>
    </div>
  )
}
