class Member {
  constructor(name) {
    this.name = name;
  }
}
class BankAccount {
  #balance
  #transactions
  constructor(member, initialBalance = 0, initialTransactions = []) {
    this.member = member;
    this.#balance = initialBalance;
    this.#transactions = initialTransactions;
    // if(this.member !== instanceof Member){
    //   throw new Error('test error')
    // }
  }
  get getBalance(){
    return this.#balance
  }
  set setBalance(amount){
     this.#balance = amount;
  }
  
  credit(amount) {
    if(amount > 0){
      this.#balance += amount;
      this.#transactions.push({type: 'credit', amount})
    }
  }
  debit(amount) {
    if(amount > 0){
      this.#balance -= amount
      this.#transactions.push({type: 'debit', amount})
    }
  }
  checkBalance() {
    return `Your current balance is: $${this.#balance}`
  }
  static transactionHistory(instance){
    return instance.#transactions;
  }

}
class CheckingAccount extends BankAccount {
  constructor(member, initialBalance, initialTransactions) {
    super(member, initialBalance, initialTransactions) 
  }

  debit(amount) {
    if(amount > 0 && this.getBalance >= amount){
    super.debit(amount)
      if (this.getBalance < 50) {
        super.debit(40);
      }
    } else {
    //   let overdraft = (this.balance - amount) * -1;
    var message = "Your balance has insufficient funds"
      return message;
    } 
  }


}
class SavingsAccount extends BankAccount {
  #linkedCheckingAccount
  #debtCount
  constructor(member, initialBalance, initialTransactions) {
    super(member, initialBalance, initialTransactions)
    this.#debtCount = 0;
  }
  linkAccount(accountToBeLinked) {
    if(!(accountToBeLinked instanceof CheckingAccount)) {
      throw new Error('account not a valid checking account')
    } else {
      this.#linkedCheckingAccount = accountToBeLinked
      console.log('account linked successfully')
    }
  }
  
  debit(amount) {
    if (this.#debtCount < 10) {
      super.debit(amount)
      this.#debtCount ++;
    } else {
      super.debit(50)
    }
  }
  transfer(amount) {
    if (!this.#linkedCheckingAccount) {
      throw new Error('Linked Account aint reaal')
    } else if (amount <= this.getBalance) {
      this.debit(amount)
      this.#linkedCheckingAccount.credit(amount)
      console.log('transfer was successful')
    }
  }
}
const distributeEvenly = () => {};
const distributeToSavings = () => {};

// Don't edit the code below this line:
// This injects your code into the 'window' so that the SpecRunner.html can display your tests in the browser

window.BankAccount = BankAccount;
window.CheckingAccount = CheckingAccount;
window.SavingsAccount = SavingsAccount;
window.Member = Member;
window.distributeEvenly = distributeEvenly;
window.distributeToSavings = distributeToSavings;

