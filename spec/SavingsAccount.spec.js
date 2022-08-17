(function () {
  ("use strict");
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
      it(`should throw an error if transfer is called when no account is linked`, function () {
        testSavingsAccount.credit(1000);
        expect(() => testSavingsAccount.transfer(1)).to.throw();
      });
      it(`should allow linking a Checking Account via the linkAccount() method`, function () {
        expect(`linkAccount` in testSavingsAccount).to.be.true;
        testSavingsAccount.credit(1000);
        testSavingsAccount.linkAccount(testCheckingAccount);
        expect(() => testSavingsAccount.transfer(20)).not.to.throw();
      });
      it(`should allow transferring money to the Checking Account via the transfer() method`, function () {
        testSavingsAccount.linkAccount(testCheckingAccount);
        testSavingsAccount.credit(10000);
        testSavingsAccount.transfer(1337);
        expect(testCheckingAccount.getBalance).to.equal(1337);
        expect(testSavingsAccount.getBalance).to.equal(8663);
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
