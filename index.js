class Member {
  constructor(name) {}
}
class BankAccount {
  #balance = 0;
  #transactions = [];
  static transactionHistory(x) {
    return x.#transactions;
  }
  constructor(member) {}
  credit(x) {
    this.#balance += x;
    // this.#transactions.push({ type: "credit", val: x });
    this.#transactions.push(x);
  }
  debit(x) {
    this.#balance -= x;
    // this.#transactions.push({ type: "debit", val: -x });
    this.#transactions.push(-x);
  }
  checkBalance() {
    return "$" + this.getBalance;
  }
  get getBalance() {
    return this.#balance;
  }
  set setBalance(x) {
    this.#balance = x;
  }
}
class CheckingAccount extends BankAccount {
  constructor(member) {
    super(member);
  }
}
class SavingsAccount extends BankAccount {
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
