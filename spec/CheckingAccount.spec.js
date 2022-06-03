(function () {
  ("use strict");
  /*
* Should be a subclass of `BankAccount`
* If you attempt to overdraft your `CheckingAccount` you should receive a message telling you that you have insufficient funds to perform that action
* If the balance of a `CheckingAccount` ever falls below $50 you should receive a $40 penalty fee

*/
  describe(`Checking Account`, function () {
    let testCheckingAccount;
    let testMember = new Member("Bort Sampson");
    beforeEach(function () {
      testCheckingAccount = new CheckingAccount(testMember);
    });
    describe(`instantiation`, function () {
      it(`should be a subclass of BankAccount`, function () {
        expect(testCheckingAccount).to.be.instanceof(BankAccount);
      });
    });
    describe(`methods`, function () {
      it(`should not allow overdrafting of the account`, function () {
        testCheckingAccount.credit(100);
        testCheckingAccount.debit(101);
        expect(testCheckingAccount.getBalance).to.equal(100);
      });
      it(`should return a message from the call to debit() in the case of an overdraft`, function () {
        testCheckingAccount.credit(100);
        let response = testCheckingAccount.debit(101);
        expect(typeof response).to.equal("string");
        expect(response.match(/insufficient/gi)).to.not.be.null;
      });
      it(`should assess a $40 penalty fee if a transaction takes the account under $50 in balance`, function () {
        testCheckingAccount.credit(100);
        testCheckingAccount.debit(51);
        expect(testCheckingAccount.getBalance).to.equal(9);
      });
    });
  });
})();
