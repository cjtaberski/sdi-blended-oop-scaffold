class Member {
  constructor(name) {}
}
class BankAccount {
  constructor(member) {}
  credit() {}
  debit() {}
  checkBalance() {}
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
