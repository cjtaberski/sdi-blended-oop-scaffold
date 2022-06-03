(function () {
  ("use strict");
  describe(`Member`, function () {
    let testMember, testAccount;
    beforeEach(function () {
      testMember = new Member("Bort Sampson");
      testAccount = new BankAccount(testMember);
    });
    describe(`Instantiation`, function () {
      it(`should have a public field containing the name`, function () {
        expect(testMember.name).to.equal("Bort Sampson");
      });
    });
    describe(`Account Privacy`, function () {
      it(`should not store any accounts in public fields`, function () {
        for (let key in testMember) {
          if (Array.isArray(testMember[key])) {
            for (let element of testMember[key]) {
              expect(element).not.to.be.instanceof(BankAccount);
            }
          } else {
            expect(testMember.key).to.not.be.instanceof(BankAccount);
          }
        }
        expect(testMember.accounts).to.equal(undefined);
        expect(testMember.account).to.equal(undefined);
      });
    });
  });
})();
