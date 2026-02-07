import type { ScryfallCard } from '../../types/ScryfallCard'
import type { InventoryItem } from '../../types/InventoryItem'

export function scryfallToInventory(
  card: ScryfallCard
): InventoryItem {
  return {
    inventoryItemId: crypto.randomUUID(),

    card: {
      name: card.name,
      scryfallId: card.id,
      setCode: card.set?.toUpperCase(),
      setName: card.set_name,
      collectorNumber: card.collector_number
        ? Number(card.collector_number)
        : undefined,
      rarity: card.rarity
    },

    quantity: 1,
    foil: card.foil ? 'foil' : 'normal',
    condition: 'near_mint',
    language: card.lang ?? 'en',
    misprint: false,
    altered: false,

    purchase: card.prices?.eur
      ? {
          price: Number(card.prices.eur),
          currency: 'EUR'
        }
      : undefined
  }
}
