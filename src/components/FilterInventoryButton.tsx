import { useState } from "react"

function FilterInventoryButton() {
    const [isFilterColorUsed, setIsFilterColorUsed] = useState(false)
    const [isFilterPriceUsed, setIsFilterPriceUsed] = useState(false)
    const [isFilterTypeUsed, setIsFilterTypeUsed] = useState(false)
    return (
        <div>
            <button
            onClick={() => setIsFilterColorUsed(!isFilterColorUsed)}
            className={`${isFilterColorUsed ? 'bg-primary/30' : 'bg-primary'} text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-full`}>
                Color
            </button>
            <button
            onClick={() => setIsFilterPriceUsed(!isFilterPriceUsed)}
            className={`${isFilterPriceUsed ? 'bg-primary/30' : 'bg-primary'} text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-full`}>
                Precio
            </button>
            <button
            onClick={() => setIsFilterTypeUsed(!isFilterTypeUsed)}
            className={`${isFilterTypeUsed ? 'bg-primary/30' : 'bg-primary'} text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-full`}>
                Tipo
            </button>
        </div>
        
    )
}
export default FilterInventoryButton