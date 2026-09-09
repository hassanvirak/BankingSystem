var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolder, initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited: Rs. ".concat(amount));
            console.log("New Balance: Rs. ".concat(this.balance));
        }
        else {
            console.log("Invalid deposit amount.");
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log("Withdrawn: Rs. ".concat(amount));
                console.log("New Balance: Rs. ".concat(this.balance));
            }
            else {
                console.log("Insufficient balance!");
                console.log("   Available: Rs. ".concat(this.balance));
                console.log("   Requested: Rs. ".concat(amount));
            }
        }
        else {
            console.log("Invalid withdrawal amount.");
        }
    };
    BankAccount.prototype.checkBalance = function () {
        console.log("\nAccount Details:");
        console.log("   Account Holder: ".concat(this.accountHolder));
        console.log("   Account Number: ".concat(this.accountNumber));
        console.log("   Current Balance: Rs. ".concat(this.balance));
    };
    BankAccount.prototype.displayAccountInfo = function () {
        console.log("==================================================");
        console.log("BANK ACCOUNT INFORMATION");
        console.log("==================================================");
        console.log("Account Holder: ".concat(this.accountHolder));
        console.log("Account Number: ".concat(this.accountNumber));
        console.log("Balance: Rs. ".concat(this.balance));
        console.log("==================================================");
    };
    return BankAccount;
}());
var myAccount = new BankAccount("PK1001", "Ahmad Ali", 50000);
myAccount.displayAccountInfo();
console.log("\nDEPOSIT TRANSACTION");
myAccount.deposit(10000);
console.log("\nWITHDRAWAL TRANSACTION");
myAccount.withdraw(25000);
console.log("\nWITHDRAWAL TRANSACTION (Insufficient Balance)");
myAccount.withdraw(50000);
console.log("\nCHECK BALANCE");
myAccount.checkBalance();
