(function () {
  ("use strict");
  /*
* Should be a subclass of `BankAccount`
* Should be able to link a `CheckingAccount` as a private property
* Should allow you to transfer money from your `SavingsAccount` to your `CheckingAccount`
* Should have a maximum number of debit transactions (10) associated with each `SavingsAccount`
* If the maximum number of debit transactions is passed you should receive a $50 penalty fee

*/
  describe(`THIS OBJECT`, function () {
    describe(`instantiation`, function () {
      let testSavingsAccount;
      beforeEach(function () {
        testSavingsAccount = new SavingsAccount();
      });
      it(`should be a subclass of BankAccount`, function () {
        expect(testSavingsAccount).to.be.instanceof(BankAccount);
      });
    });
    describe(`THIS THING ABOUT THE OBJECT`, function () {
      it(`should do a thing`, function () {});
      it(`should do a thing`, function () {});
      it(`should do a thing`, function () {});
    });
  });
})();
