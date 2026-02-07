export interface InventoryItem {
  inventoryItemId: string
  card: {
    name: string
    scryfallId: string
    setCode?: string
    setName?: string
    collectorNumber?: number
    rarity?: string
  }
  quantity: number
  foil: string
  condition: 'mint' | 'near_mint' | 'played' | 'damaged'
  language: string
  misprint: boolean
  altered: boolean
  purchase?: {
    price: number
    currency: string
  }
}
