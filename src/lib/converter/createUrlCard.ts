import type { ManaBoxExport } from "../demo/types";

export function createUrlCard(card:ManaBoxExport): string {
            return "https://api.scryfall.com/cards/search?q="
            + card.name.replace(" ", "+").replace(", ", ",+")
            + "+set:"
            + card.set_code
            + "+number:"
            + card.collector_number
}