(function () {
  ("use strict");
  /*
* Should be a subclass of `BankAccount`
* The `linkAccount()` method should allow linking a `CheckingAccount` and storing it as a private property
* Should allow you to transfer money from your `SavingsAccount` to your `CheckingAccount`
* Should have a maximum number of debit transactions (10) associated with each `SavingsAccount`
* If the maximum number of debit transactions is passed you should receive a $50 penalty fee

*/
  describe(`Savings Account`, function () {
    let testSavingsAccount;
    let testMember = new Member("Bort Sampson");
    beforeEach(function () {
      testSavingsAccount = new SavingsAccount(testMember);
    });
    describe(`instantiation`, function () {
      it(`should be a subclass of BankAccount`, function () {
        expect(testSavingsAccount).to.be.instanceof(BankAccount);
      });
    });
    describe(`linking accounts`, function () {
      let testCheckingAccount;
      beforeEach(function () {
        testCheckingAccount = new CheckingAccount(testMember);
      });
      it(`should allow linking a Checking Account via the linkAccount() method`, function () {
        expect(`linkAccount` in testSavingsAccount).to.be.true;
        expect(
          testSavingsAccount.linkAccount(testCheckingAccount)
        ).not.to.throw();
      });
      it(`should allow transferring money to the Checking Account via the transfer() method`, function () {
        testSavingsAccount.credit(10000);
        testSavingsAccount.transfer(1337);
        expect(testCheckingAccount.getBalance).to.equal(1337);
      });
    });
    describe(`debit limit`, function () {
      it(`should not allow more than 10 debits`, function () {
        testSavingsAccount.credit(100);
        for (let i = 0; i < 11; i++) {
          testSavingsAccount.debit(1);
        }
        expect(testSavingsAccount.getBalance % 10).not.to.equal(9);
      });
      it(`should assess a $50 penalty fee if the maximum number of debits is reached`, function () {
        testSavingsAccount.credit(100);
        for (let i = 0; i < 10; i++) {
          testSavingsAccount.debit(1);
        }
        expect(testSavingsAccount.getBalance).to.equal(40);
      });
    });
  });
})();
