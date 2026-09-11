var books = [
    { BookID: 1, Title: "The Great Gatsby", Author: "F. Scott Fitzgerald", Category: "Fiction", Available: true },
    { BookID: 2, Title: "Sapiens", Author: "Yuval Noah Harari", Category: "Non-Fiction", Available: false },
    { BookID: 3, Title: "1984", Author: "George Orwell", Category: "Fiction", Available: true },
    { BookID: 4, Title: "The Art of War", Author: "Sun Tzu", Category: "Philosophy", Available: true },
    { BookID: 5, Title: "Python Programming", Author: "John Doe", Category: "Technology", Available: false }
];
function displayAllBooks() {
    console.log("========================================================================================");
    console.log("ALL BOOKS");
    console.log("========================================================================================");
    console.log("ID\tTitle\t\t\t\tAuthor\t\t\tCategory\tAvailable");
    console.log("----------------------------------------------------------------------------------------");
    books.forEach(function (book) {
        console.log("".concat(book.BookID, "\t").concat(book.Title, "\t\t").concat(book.Author, "\t\t").concat(book.Category, "\t\t").concat(book.Available));
    });
    console.log("========================================================================================");
}
function displayAvailableBooks() {
    var availableBooks = books.filter(function (book) { return book.Available === true; });
    console.log("\nAVAILABLE BOOKS");
    console.log("================================================================================");
    console.log("ID\tTitle\t\t\t\tAuthor\t\t\tCategory");
    console.log("--------------------------------------------------------------------------------");
    availableBooks.forEach(function (book) {
        console.log("".concat(book.BookID, "\t").concat(book.Title, "\t\t").concat(book.Author, "\t\t").concat(book.Category));
    });
    console.log("================================================================================");
}
function countAvailableBooks() {
    var availableCount = books.filter(function (book) { return book.Available === true; }).length;
    console.log("\nTotal Available Books: ".concat(availableCount, " out of ").concat(books.length));
    console.log("========================================");
}
displayAllBooks();
displayAvailableBooks();
countAvailableBooks();
