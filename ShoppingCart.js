// ShoppingCart.ts - NO .repeat() VERSION
var products = [
    { ProductID: 1, ProductName: "Laptop", Price: 80000, Quantity: 2 },
    { ProductID: 2, ProductName: "Mouse", Price: 1500, Quantity: 3 },
    { ProductID: 3, ProductName: "Keyboard", Price: 3000, Quantity: 1 },
    { ProductID: 4, ProductName: "Monitor", Price: 25000, Quantity: 2 },
    { ProductID: 5, ProductName: "USB Cable", Price: 500, Quantity: 5 }
];
function displayProducts() {
    console.log("================================================================================\n");
    console.log("SHOPPING CART");
    console.log("================================================================================");
    console.log("ID\tProduct Name\t\tPrice\tQuantity\tTotal");
    console.log("--------------------------------------------------------------------------------");
    var grandTotal = 0;
    products.forEach(function (product) {
        var total = product.Price * product.Quantity;
        grandTotal += total;
        console.log("".concat(product.ProductID, "\t").concat(product.ProductName, "\t\t").concat(product.Price, "\t").concat(product.Quantity, "\t\t").concat(total));
    });
    console.log("--------------------------------------------------------------------------------");
    console.log("\uD83C\uDFAF GRAND TOTAL BILL: Rs. ".concat(grandTotal));
    console.log("================================================================================");
}
displayProducts();
