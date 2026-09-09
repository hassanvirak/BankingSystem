class BankAccount {
    private balance: number;
    private accountNumber: string;
    private accountHolder: string;
    constructor(accountNumber: string, accountHolder: string, initialBalance: number = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: Rs. ${amount}`);
            console.log(`New Balance: Rs. ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }
    withdraw(amount: number): void {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawn: Rs. ${amount}`);
                console.log(`New Balance: Rs. ${this.balance}`);
            } else {
                console.log(`Insufficient balance!`);
                console.log(`   Available: Rs. ${this.balance}`);
                console.log(`   Requested: Rs. ${amount}`);
            }
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
    checkBalance(): void {
        console.log(`\nAccount Details:`);
        console.log(`   Account Holder: ${this.accountHolder}`);
        console.log(`   Account Number: ${this.accountNumber}`);
        console.log(`   Current Balance: Rs. ${this.balance}`);
    }
    displayAccountInfo(): void {
        console.log("==================================================");
        console.log("BANK ACCOUNT INFORMATION");
        console.log("==================================================");
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Balance: Rs. ${this.balance}`);
        console.log("==================================================");
    }
}
const myAccount = new BankAccount("PK1001", "Ahmad Ali", 50000);
myAccount.displayAccountInfo();
console.log("\nDEPOSIT TRANSACTION");
myAccount.deposit(10000);
console.log("\nWITHDRAWAL TRANSACTION");
myAccount.withdraw(25000);
console.log("\nWITHDRAWAL TRANSACTION (Insufficient Balance)");
myAccount.withdraw(50000);
console.log("\nCHECK BALANCE");
myAccount.checkBalance();