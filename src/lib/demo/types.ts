interface CardInfoProps {
  inventoryItemId: string;
  card: {
    name: string;
    scryfallId: string;
    setCode: string;
    setName: string;
    collectorNumber: number;
    rarity: string;
  };
  quantity: number;
  foil: string;
  condition: string;
  language: string;
  misprint: boolean;
  altered: boolean;
  purchase: {
    price: number;
    currency: string;
  };
}

export type { CardInfoProps };