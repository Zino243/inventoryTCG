import rawInventory from '../lib/demo/inventory.json'
import type { InventoryItem } from '../types/InventoryItem'
import { scryfallToInventory } from './demo/scryfalltoinventory'
import type { ScryfallCard } from '../types/ScryfallCard'

// Forzamos el tipo correcto al JSON importado
let inventory = rawInventory as InventoryItem[]

export const getInventory = (): InventoryItem[] => {
  return inventory
}

export const addToInventory = (card: ScryfallCard): void => {
  // Convertimos la carta a InventoryItem asegurando valores obligatorios
  const item: InventoryItem = scryfallToInventory(card)

  // Aseguramos que setCode, setName y collectorNumber nunca sean undefined
  item.card.setCode = item.card.setCode ?? 'UNKNOWN'
  item.card.setName = item.card.setName ?? 'Unknown Set'
  item.card.collectorNumber = item.card.collectorNumber ?? 0

  // Agregamos al array en memoria
  inventory.push(item)

  // Guardamos en localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('inventory', JSON.stringify(inventory))
  }

  console.log('Agregada al inventario:', item)
  console.log('Inventario actual:', inventory)
}

export const exportInventoryToJSON = (): string => {
  return JSON.stringify(inventory, null, 2)
}

export const downloadInventoryAsJSON = (): void => {
  const json = exportInventoryToJSON()
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'inventory.json'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export const importInventoryFromJSON = (jsonString: string): boolean => {
  try {
    const importedData = JSON.parse(jsonString) as InventoryItem[]
    inventory = importedData
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('inventory', JSON.stringify(inventory))
    }
    
    return true
  } catch (error) {
    console.error('Error importing inventory:', error)
    return false
  }
}

export const loadInventoryFromStorage = (): void => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('inventory')
    if (stored) {
      try {
        inventory = JSON.parse(stored)
      } catch (error) {
        console.error('Error loading inventory from storage:', error)
        inventory = []
      }
    }
  }
}