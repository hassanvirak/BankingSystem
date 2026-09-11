interface InventoryItem {
    ItemID: number;
    ItemName: string;
    StockQuantity: number;
    UnitPrice: number;
}
const inventoryItems: InventoryItem[] = [
    { ItemID: 1, ItemName: "Laptop", StockQuantity: 15, UnitPrice: 80000 },
    { ItemID: 2, ItemName: "Mouse", StockQuantity: 50, UnitPrice: 1500 },
    { ItemID: 3, ItemName: "Keyboard", StockQuantity: 8, UnitPrice: 3000 },
    { ItemID: 4, ItemName: "Monitor", StockQuantity: 20, UnitPrice: 25000 },
    { ItemID: 5, ItemName: "USB Cable", StockQuantity: 5, UnitPrice: 500 }
];
function displayAllItems(): void {
    console.log("================================================================================");
    console.log("INVENTORY ITEMS");
    console.log("================================================================================");
    console.log("ID\tItem Name\t\tStock\tUnit Price\tTotal Value");
    console.log("--------------------------------------------------------------------------------");
    inventoryItems.forEach(item => {
        const totalValue = item.StockQuantity * item.UnitPrice;
        console.log(`${item.ItemID}\t${item.ItemName}\t\t${item.StockQuantity}\t${item.UnitPrice}\t\t${totalValue}`);
    });
    console.log("================================================================================");
}
function calculateTotalInventoryValue(): void {
    let totalValue = 0;
    inventoryItems.forEach(item => {
        totalValue += item.StockQuantity * item.UnitPrice;
    });
    console.log(`\nTotal Inventory Value: Rs. ${totalValue}`);
    console.log("========================================");
}
function displayLowStockItems(): void {
    const lowStockItems = inventoryItems.filter(item => item.StockQuantity < 10);
    if (lowStockItems.length === 0) {
        console.log("\nAll items have sufficient stock.");
        return;
    }
    console.log("\nLOW STOCK ITEMS (Less than 10)");
    console.log("======================================================================");
    console.log("ID\tItem Name\t\tStock\tUnit Price");
    console.log("----------------------------------------------------------------------");
    lowStockItems.forEach(item => {
        console.log(`${item.ItemID}\t${item.ItemName}\t\t${item.StockQuantity}\t${item.UnitPrice}`);
    });
    console.log("======================================================================");
}
displayAllItems();
calculateTotalInventoryValue();
displayLowStockItems();