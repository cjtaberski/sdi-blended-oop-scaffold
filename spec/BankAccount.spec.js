(function () {
  ("use strict");
  describe(`Bank Account`, function () {
    let testBankAccount, randomNumber, testMember;

    function getRandomNumber(min = 0, max = 100000) {
      return min + Math.ceil(Math.random() * max);
    }
    beforeEach(() => {
      testMember = new Member("Bort Sampson");
      testBankAccount = new BankAccount(testMember);
      randomNumber = getRandomNumber();
    });
    describe(`instantiation`, function () {
      it(`should be a class`, function () {
        expect(typeof BankAccount).to.equal("function");
        expect(typeof BankAccount.constructor).to.equal("function");
        expect(BankAccount.toString()).to.include("class");
        expect(testBankAccount).to.be.instanceof(BankAccount);
      });
      it(`should throw an error if a valid Member instance is not provided`, function () {
        expect(() => new BankAccount()).to.throw();
        expect(() => new BankAccount(19)).to.throw();
      });
      it(`should store the member in the 'member' property`, function () {
        expect(testBankAccount.member).to.be.instanceof(Member);
        expect(testBankAccount.member).to.equal(testMember);
      });
    });
    describe(`balance`, function () {
      it(`should be accessible via getter`, function () {
        expect("getBalance" in testBankAccount).to.be.true;
        expect(testBankAccount.getBalance).to.equal(0);
      });

      it(`should be settable via setter`, function () {
        expect("setBalance" in testBankAccount).to.be.true;
        testBankAccount.setBalance = randomNumber;
        expect(testBankAccount.getBalance).to.equal(randomNumber);
      });

      it(`should not be a public field`, function () {
        //common names for such a field
        let commonNames = ["balance", "total", "dollars", "money", "cash"];
        for (let name of commonNames) {
          expect(testBankAccount[name]).to.be.undefined;
        }
        // set balance to a random number
        testBankAccount.setBalance = randomNumber;
        // looks for anywhere that number might be stored.
        expect(Object.values(testBankAccount)).not.to.include(randomNumber);
      });
    });

    describe(`credit() method`, function () {
      it(`should exist`, function () {
        expect("credit" in testBankAccount).to.be.true;
        expect(typeof testBankAccount.credit).to.equal("function");
      });
      it(`should increase the balance of the account`, function () {
        testBankAccount.credit(randomNumber);
        expect(testBankAccount.getBalance).to.equal(randomNumber);
      });
    });

    describe(`debit() method`, function () {
      it(`should exist`, function () {
        expect("debit" in testBankAccount).to.be.true;
        expect(typeof testBankAccount.debit).to.equal("function");
      });
      it(`should decrease the balance of the account`, function () {
        testBankAccount.credit(randomNumber);
        testBankAccount.debit(randomNumber - 1);
        expect(testBankAccount.getBalance).to.equal(1);
      });
    });

    describe(`checkBalance() method`, function () {
      it(`should exist`, function () {
        expect("checkBalance" in testBankAccount).to.be.true;
        expect(typeof testBankAccount.checkBalance).to.equal("function");
      });
      it(`should return a string`, function () {
        expect(typeof testBankAccount.checkBalance()).to.equal("string");
      });
      it(`should return the balance in the string`, function () {
        testBankAccount.credit(randomNumber);
        let balanceString = "" + testBankAccount.getBalance;
        expect(testBankAccount.checkBalance()).to.include(balanceString);
      });
    });

    describe(`transactions`, function () {
      it(`should not be a public field`, function () {
        expect(testBankAccount.transactions).to.be.undefined;
        let creditVal = getRandomNumber(1000);
        let debitVal = getRandomNumber(10, 200);
        testBankAccount.credit(creditVal);
        testBankAccount.debit(debitVal);
        for (let key in testBankAccount) {
          if (Array.isArray(testBankAccount[key])) {
            expect(testBankAccount[key]).not.to.include(creditVal);
            expect(testBankAccount[key]).not.to.include(debitVal);
          } else if (typeof testBankAccount[key] === "object") {
            expect(Object.values(testBankAccount[key])).not.to.include(
              creditVal
            );
            expect(Object.values(testBankAccount[key])).not.to.include(
              debitVal
            );
          } else {
            expect(testBankAccount[key]).not.to.equal(creditVal);
            expect(testBankAccount[key]).not.to.equal(debitVal);
          }
        }
      });
    });

    describe(`static method transactionHistory()`, function () {
      it(`should exist`, function () {
        expect("transactionHistory" in BankAccount).to.be.true;
      });
      it(`should be a static method that returns an array`, function () {
        expect(typeof BankAccount.transactionHistory).to.equal("function");
        expect(Array.isArray(BankAccount.transactionHistory(testBankAccount)))
          .to.be.true;
      });
      it(`should return the transaction history of the account`, function () {
        let creditVal = getRandomNumber(1000);
        let debitVal = getRandomNumber(10, 200);
        testBankAccount.credit(creditVal);
        testBankAccount.debit(debitVal);
        let foundCredit = false;
        let foundDebit = false;
        function validate(item) {
          if (typeof item === "number") {
            if (item === creditVal) foundCredit = true;
            if (Math.abs(item) === debitVal) foundDebit = true;
          } else if (typeof item === "string") {
            if (item.includes(creditVal)) foundCredit = true;
            if (item.includes(debitVal)) foundDebit = true;
          }
        }
        for (let entry of BankAccount.transactionHistory(testBankAccount)) {
          if (
            typeof entry === "object" &&
            !Array.isArray(entry) &&
            entry !== null
          ) {
            for (let key in entry) {
              validate(entry[key]);
            }
          } else validate(entry);
        }
        expect(foundCredit).to.be.true;
        expect(foundDebit).to.be.true;
      });
    });
  });
})();
