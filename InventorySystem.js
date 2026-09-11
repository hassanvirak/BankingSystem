var inventoryItems = [
    { ItemID: 1, ItemName: "Laptop", StockQuantity: 15, UnitPrice: 80000 },
    { ItemID: 2, ItemName: "Mouse", StockQuantity: 50, UnitPrice: 1500 },
    { ItemID: 3, ItemName: "Keyboard", StockQuantity: 8, UnitPrice: 3000 },
    { ItemID: 4, ItemName: "Monitor", StockQuantity: 20, UnitPrice: 25000 },
    { ItemID: 5, ItemName: "USB Cable", StockQuantity: 5, UnitPrice: 500 }
];
function displayAllItems() {
    console.log("================================================================================");
    console.log("INVENTORY ITEMS");
    console.log("================================================================================");
    console.log("ID\tItem Name\t\tStock\tUnit Price\tTotal Value");
    console.log("--------------------------------------------------------------------------------");
    inventoryItems.forEach(function (item) {
        var totalValue = item.StockQuantity * item.UnitPrice;
        console.log("".concat(item.ItemID, "\t").concat(item.ItemName, "\t\t").concat(item.StockQuantity, "\t").concat(item.UnitPrice, "\t\t").concat(totalValue));
    });
    console.log("================================================================================");
}
function calculateTotalInventoryValue() {
    var totalValue = 0;
    inventoryItems.forEach(function (item) {
        totalValue += item.StockQuantity * item.UnitPrice;
    });
    console.log("\nTotal Inventory Value: Rs. ".concat(totalValue));
    console.log("========================================");
}
function displayLowStockItems() {
    var lowStockItems = inventoryItems.filter(function (item) { return item.StockQuantity < 10; });
    if (lowStockItems.length === 0) {
        console.log("\nAll items have sufficient stock.");
        return;
    }
    console.log("\nLOW STOCK ITEMS (Less than 10)");
    console.log("======================================================================");
    console.log("ID\tItem Name\t\tStock\tUnit Price");
    console.log("----------------------------------------------------------------------");
    lowStockItems.forEach(function (item) {
        console.log("".concat(item.ItemID, "\t").concat(item.ItemName, "\t\t").concat(item.StockQuantity, "\t").concat(item.UnitPrice));
    });
    console.log("======================================================================");
}
displayAllItems();
calculateTotalInventoryValue();
displayLowStockItems();
