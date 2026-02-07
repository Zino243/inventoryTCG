import type { ManaBoxExport } from "../demo/types"
import { createUrlCard } from "../converter/createUrlCard"
// request.ts
async function get(param: string) {
    const url = "https://api.scryfall.com/cards/search?q="
    const res = await fetch(url + encodeURIComponent(param))
    if (!res.ok) throw new Error("Error en la API de Scryfall")
    const data = await res.json()
    return data
}

// controlador.ts

function find(param: string) {
    return get(param)
}


async function getSpecific(card: ManaBoxExport): Promise<string> {
    // https://api.scryfall.com/cards/search?q=Admiral+Brass,+Unsinkable+set:LCC+number:17
    try {
        const url = createUrlCard(card)
        const res = await fetch(url)

        const data = await res.json()
        if (!data.ok) console.log(url)
        console.log("✅ - ", card.name)
        return data["data"][0].image_uris.small as string
        
    } catch (error) {
        console.error("Error en la API de scryfall: ", error)
        // img de black lotus como defecto
        return "https://cards.scryfall.io/small/front/4/c/4c85d097-e87b-41ee-93c6-0e54ec41b174.jpg?1562799094"
        
    }
    }
export default {find, getSpecific}