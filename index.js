class Member {
  constructor(name) {
    this.name = name;
  }
}
class BankAccount {
  #balance
  #transactions
  constructor(member, initialBalance = 0) {
    this.member = member;
    this.#balance = initialBalance;
    this.#transactions = [];
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
class CheckingAccount {
  constructor(member) {}
}
class SavingsAccount {
  constructor(member) {}
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

