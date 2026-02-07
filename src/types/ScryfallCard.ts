export interface ScryfallCard {
  id: string
  name: string
  mana_cost?: string
  type_line: string
  oracle_text?: string
  colors?: string[]
  color_identity?: string[]
  rarity?: string
  set_name?: string
  artist?: string
  power?: string
  toughness?: string
  image_uris?: {
    small?: string
    normal?: string
    large?: string
    png?: string
    art_crop?: string
    border_crop?: string
  }
  prices?: {
    usd?: string
    usd_foil?: string
    eur?: string
    eur_foil?: string
    tix?: string
  }
  legalities?: Record<string, string>
  games?: string[]
  lang?: string
  foil?: boolean
  nonfoil?: boolean
  reserved?: boolean
  promo?: boolean
  set?: string
  collector_number?: string
  layout?: string
  flavor_text?: string
}