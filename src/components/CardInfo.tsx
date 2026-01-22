import { type CardInfoProps } from "../lib/demo/types";
import { useState } from "react";

function CardInfo(dataCard: CardInfoProps) {
    const card = dataCard.card;
    const [open, setOpen] = useState(false);
//   const formattedName = card.card.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
//   const scryfallUrl = `https://scryfall.com/card/${card.card.setCode.toLowerCase()}/${card.card.collectorNumber}/${formattedName}`;

  return (
    <div className="bg-white dark:bg-card shadow-md dark:shadow-lg rounded-xl p-4 mb-4">

        <div className="relative">
        <div onClick={() => setOpen(!open)} className="cursor-pointer bg-white p-4 rounded shadow">
            {card.name}
        </div>

        {open && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-64 bg-white p-4 rounded shadow-lg z-50">
            <p>{card.name}</p>
            <p>{card.rarity}</p>
            <button onClick={() => setOpen(false)}>Close</button>
            </div>
        )}
        </div>
    </div>
  );
}

export default CardInfo;
