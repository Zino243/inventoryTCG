import { type CardInfoProps } from "../lib/demo/types";


function HoverCard({ card }: { card: CardInfoProps['card'] }) {
  const formattedName = card.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const scryfallUrl = `https://scryfall.com/card/${card.setCode.toLowerCase()}/${card.collectorNumber}/${formattedName}`;

  return (
    <div className="relative group">
      {/* La mini-card que se ve siempre */}
      <div className="bg-white dark:bg-card p-4 rounded shadow cursor-pointer">
        <p className="font-bold">{card.name}</p>
        <p className="text-sm text-gray-500">{card.rarity}</p>
      </div>

      {/* El card flotante */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-64 bg-white dark:bg-card p-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
        <h2 className="font-bold mb-2">
          <a href={scryfallUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {card.name}
          </a>
        </h2>
        <p className="text-sm text-gray-500">Set: {card.setName} ({card.setCode.toUpperCase()})</p>
        <p className="text-sm text-gray-500">Collector #: {card.collectorNumber}</p>
        <p className="text-sm text-gray-500">Rarity: {card.rarity}</p>
      </div>
    </div>
  );
}
export default HoverCard;