import inventory from "../lib/demo/inventory.json"
import BackButton from '../components/BackButton'
import FilterInventoryButton from '../components/FilterInventoryButton'
import CardInfo from '../components/CardInfo'

function Inventory() {
    return (
        <div className="bg-background min-h-screen ">
            <div className="flex flex-row items-start">
                <BackButton />    
                <div className="max-w-7xl">
                    <h1 className="text-3xl font-bold text-foreground">Inventario</h1>
                    <p className="text-foreground">Cartas: {inventory.length}</p>
                </div>
            </div>
            <FilterInventoryButton/>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-cols-1 gap-4">
                {inventory.map((item) => {
                const card = {
                    ...item.card,
                    collectorNumber: Number(item.card.collectorNumber), // convertimos a number
                }

                const purchase = {
                    ...item.purchase,
                    price: Number(item.purchase.price), // convertimos a number
                }

                return (
                    <CardInfo
                    key={item.inventoryItemId}
                    {...item}
                    card={card}
                    purchase={purchase}
                    />
                )
                })}
            </div>
        </div>
    )
}

export default Inventory