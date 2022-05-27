(function () {
  ("use strict");
  /*
* Should be a subclass of `BankAccount`
* If you attempt to overdraft your `CheckingAccount` you should receive a message telling you that you have insufficient funds to perform that action
* If the balance of a `CheckingAccount` ever falls below $50 you should receive a $40 penalty fee

*/
  describe(`THIS OBJECT`, function () {
    describe(`instantiation`, function () {
      let testCheckingAccount;
      beforeEach(function () {
        testCheckingAccount = new CheckingAccount();
      });
      it(`should be a subclass of BankAccount`, function () {
        expect(testCheckingAccount).to.be.instanceof(BankAccount);
      });
    });
    describe(`methods`, function () {
      it(`should handle overdrafoverdraft`, function () {});
      it(`should handle overdrafoverdraft`, function () {});
      it(`should handle overdrafoverdraft`, function () {});
    });
  });
})();
