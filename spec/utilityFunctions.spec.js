(function () {
  ("use strict");
  describe(`Utility Functions`, function () {
    let testBankAccount1,
      testBankAccount2,
      testCheckingAccount1,
      testCheckingAccount2,
      testSavingsAccount1,
      testSavingsAccount2,
      testMember1,
      testMember2,
      testAccountArray;
    beforeEach(function () {
      testMember1 = new Member(`Orson Welles`);
      testMember2 = new Member(`Bort Sampson`);
      testBankAccount1 = new BankAccount(testMember1);
      testBankAccount2 = new BankAccount(testMember2);
      testCheckingAccount1 = new CheckingAccount(testMember1);
      testCheckingAccount2 = new CheckingAccount(testMember2);
      testSavingsAccount1 = new SavingsAccount(testMember1);
      testSavingsAccount2 = new SavingsAccount(testMember2);
      testAccountArray = [
        testBankAccount1,
        testBankAccount2,
        testCheckingAccount1,
        testCheckingAccount2,
        testSavingsAccount1,
        testSavingsAccount2,
      ];
    });
    describe(`distributeEvenly`, function () {
      it(`distribute the specified amount to all accounts provided`, function () {
        distributeEvenly(testAccountArray, 36);
        testAccountArray.forEach((account) =>
          expect(account.getBalance).to.equal(6)
        );
      });
      it(`should handle numbers that don't divide evenly by the number of accounts`, function () {
        distributeEvenly(testAccountArray, 41);
        testAccountArray.forEach(function (account) {
          expect(account.getBalance).to.equal(6.83);
        });
      });
    });
    describe(`distributeToSavings`, function () {
      let savingsAccounts, otherAccounts;
      beforeEach(function () {
        savingsAccounts = [testSavingsAccount1, testSavingsAccount2];
        otherAccounts = [
          testBankAccount1,
          testBankAccount2,
          testCheckingAccount1,
          testCheckingAccount2,
        ];
      });
      it(`should distribute the specified amount to all Savings Accounts provided`, function () {
        distributeToSavings(testAccountArray, 150);
        savingsAccounts.forEach(function (account) {
          expect(account.getBalance).to.equal(75);
        });
      });
      it(`should not distribute anything to any accounts that are not Savings Accounts`, function () {
        distributeToSavings(testAccountArray, 150);
        otherAccounts.forEach(function (account) {
          expect(account.getBalance).to.equal(0);
        });
      });
      it(`should handle numbers that don't divide evenly by the number of Savings Accounts`, function () {
        let testMember3 = new Member("Cobra Commander");
        let testSavingsAccount3 = new SavingsAccount(testMember3);
        testAccountArray = [...testAccountArray, testSavingsAccount3];
        savingsAccounts = [...savingsAccounts, testSavingsAccount3];
        distributeToSavings(testAccountArray, 11);
        savingsAccounts.forEach(function (account) {
          expect(account.getBalance).to.equal(3.66);
        });
        otherAccounts.forEach(function (account) {
          expect(account.getBalance).to.equal(0);
        });
      });
    });
  });
})();
