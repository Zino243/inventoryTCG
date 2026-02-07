import type { ManaBoxExport } from "./demo/types";

export function urlScryfall(card:ManaBoxExport) {
    return "https://scryfall.com/card/"
    + card.set_code + "/"
    + card.collector_number + "/"
    + card.name.toLowerCase().replace(" ", "-").replace(", ", ",-")
    + "?utm_source=api"
    // https://scryfall.com/card/p30m/1P/arcane-signet?utm_source=api
    // https://api.scryfall.com/cards/search?q=Arcane+Signet+set:P30M+number:1P
}