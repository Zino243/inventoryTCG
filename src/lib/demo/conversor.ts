// este conversor convierte el json dado del csv de manabox a lo que usamos aqui
// conversor.ts
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

// Tipos
type CsvCard = {
  "Name": string
  "Set code": string
  "Set name": string
  "Collector number": number
  "Foil": string
  "Rarity": string
  "Quantity": number
  "ManaBox ID": number
  "Scryfall ID": string
  "Purchase price": number
  "Misprint": boolean
  "Altered": boolean
  "Condition": string
  "Language": string
  "Purchase price currency": string
}

type InventoryItem = {
  inventoryItemId: string
  card: {
    name: string
    scryfallId: string
    setCode: string
    setName: string
    collectorNumber: number
    rarity: string
  }
  quantity: number
  foil: string
  condition: string
  language: string
  misprint: boolean
  altered: boolean
  purchase: {
    price: number
    currency: string
  }
}

// Conversor
function convertCsvToInventory(csvCards: CsvCard[]): InventoryItem[] {
  return csvCards.map((c, index) => ({
    inventoryItemId: `item_${(index + 1).toString().padStart(3, '0')}`,
    card: {
      name: c["Name"],
      scryfallId: c["Scryfall ID"],
      setCode: c["Set code"],
      setName: c["Set name"],
      collectorNumber: c["Collector number"],
      rarity: c["Rarity"]
    },
    quantity: c["Quantity"],
    foil: c["Foil"],
    condition: c["Condition"],
    language: c["Language"],
    misprint: c["Misprint"],
    altered: c["Altered"],
    purchase: {
      price: c["Purchase price"],
      currency: c["Purchase price currency"]
    }
  }))
}

// 🔹 ES Module: obtener path del directorio actual
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Leer CSV parseado a JSON
const csvPath = join(__dirname, 'manabox.json')
const csvData: CsvCard[] = JSON.parse(readFileSync(csvPath, 'utf-8'))

// Convertir
const inventory = convertCsvToInventory(csvData)

// Guardar
const outputPath = join(__dirname, 'inventory.json')
writeFileSync(outputPath, JSON.stringify(inventory, null, 2))

console.log('✅ Conversión completa. Archivo generado en:', outputPath)
