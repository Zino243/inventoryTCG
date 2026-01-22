import inventory from "../lib/demo/inventory.json"

function InventoryCard() {
    return (
        <div className="border border-accent-foreground rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Inventario</h2>
            <p className="text-muted">Cartas: {inventory.length}</p>
        </div>
    );
}

export default InventoryCard