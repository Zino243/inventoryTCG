import { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import FilterInventoryButton from '../components/FilterInventoryButton'
import { getInventory, loadInventoryFromStorage } from '../lib/inventoryManager'
import type { InventoryItem } from '../types/InventoryItem'

import CardDisplay from '../components/CardDisplay' // reutilizamos estilo del buscador

function Inventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>([])

  useEffect(() => {
    loadInventoryFromStorage()
    setInventory(getInventory())
  }, [])

  return (
    <div className="bg-background min-h-screen p-6">
      {/* Header */}
      <div className="flex flex-row items-center mb-6">
        <BackButton />    
        <div className="ml-4">
          <h1 className="text-3xl font-bold text-foreground">Inventario</h1>
          <p className="text-foreground">Cartas: {inventory.length}</p>
        </div>
      </div>

      {/* Filtros */}
      <FilterInventoryButton />

      {/* Cartas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {inventory.map((item: InventoryItem) => {
          // Creamos un objeto tipo ScryfallCard mínimo para CardDisplay
          const cardForDisplay = {
            id: item.card.scryfallId,
            name: item.card.name,
            type_line: "", // opcional
            oracle_text: "", // opcional
            image_uris: { normal: "" }, // opcional, puedes usar url real si la tienes
            rarity: item.card.rarity,
            set_name: item.card.setName,
            collector_number: String(item.card.collectorNumber),
            foil: item.foil === 'foil',
            lang: item.language
          }

          return (
            <CardDisplay key={item.inventoryItemId} card={cardForDisplay} />
          )
        })}
      </div>
    </div>
  )
}

export default Inventory
