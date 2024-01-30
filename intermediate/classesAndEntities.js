class BankAccount {
    constructor(name, balance = 0) {
      this.name = name;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into ${this.name}'s account. New balance: ${this.balance}`);
      } else {
        console.log('Invalid deposit amount. Please deposit a positive amount.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.name}'s account. New balance: ${this.balance}`);
      } else if (amount > this.balance) {
        console.log('Insufficient funds. Withdrawal amount exceeds the current balance.');
      } else {
        console.log('Invalid withdrawal amount. Please withdraw a positive amount.');
      }
    }
  
    checkBalance() {
      console.log(`${this.name}'s account balance: ${this.balance}`);
    }
  
    static transfer(sourceAccount, targetAccount, amount) {
      if (amount > 0 && amount <= sourceAccount.balance) {
        sourceAccount.withdraw(amount);
        targetAccount.deposit(amount);
        console.log(`Transferred ${amount} from ${sourceAccount.name}'s account to ${targetAccount.name}'s account.`);
      } else if (amount > sourceAccount.balance) {
        console.log('Transfer failed. Insufficient funds in the source account.');
      } else {
        console.log('Invalid transfer amount. Please transfer a positive amount.');
      }
    }
  }
  

  const account1 = new BankAccount('Gaurav', 1000);
  const account2 = new BankAccount('Avinash', 500);
  
  account1.checkBalance(); 
  account2.checkBalance(); 
  
  BankAccount.transfer(account1, account2, 200); 
  account1.checkBalance(); 
  account2.checkBalance(); 
  
  account1.withdraw(900); 
  account1.checkBalance(); 
  