// ShoppingCart.ts - NO .repeat() VERSION

interface Product {
    ProductID: number;
    ProductName: string;
    Price: number;
    Quantity: number;
}

const product: Product[] = [
    { ProductID: 1, ProductName: "Laptop", Price: 80000, Quantity: 2 },
    { ProductID: 2, ProductName: "Mouse", Price: 1500, Quantity: 3 },
    { ProductID: 3, ProductName: "Keyboard", Price: 3000, Quantity: 1 },
    { ProductID: 4, ProductName: "Monitor", Price: 25000, Quantity: 2 },
    { ProductID: 5, ProductName: "USB Cable", Price: 500, Quantity: 5 }
];

function displayProduct(): void {
    console.log("================================================================================\n");
    console.log("SHOPPING CART");
    console.log("================================================================================");
    console.log("ID\tProduct Name\t\tPrice\tQuantity\tTotal");
    console.log("--------------------------------------------------------------------------------");
    
    let grandTotal: number = 0;
    
    products.forEach(product => {
        const total = product.Price * product.Quantity;
        grandTotal += total;
        console.log(`${product.ProductID}\t${product.ProductName}\t\t${product.Price}\t${product.Quantity}\t\t${total}`);
    });
    
    console.log("--------------------------------------------------------------------------------");
    console.log(` GRAND TOTAL BILL: Rs. ${grandTotal}`);
    console.log("================================================================================");
}

displayProducts();