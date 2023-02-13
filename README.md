# JavaScript Object Oriented Programming Workshop

## Project Instructions

* In this application you will create the following classes :
  * `BankAccount`
  * `CheckingAccount`
  * `SavingsAccount`
  * `Member`
* Implement the following instructions to ensure that each class is formatted properly


###
* Start Script
* Discussion of adding sin on if desired (?)
* Discussion of testing packages in lib folder to make this easy to run

#### `BankAccount`
* `balance` should be a private property (Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields))
* `balance` should only be accessible via a getter named `getBalance` and a setter named `setbalance` (Read more about [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) and [getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get))
* The `credit()` method should add the given amount of money into the account
* The `debit()` method should take out the given amount of money from the account
* The `checkBalance()` method should return the current balance of the account in a readable string
* Anytime a transaction occurs, the amount credited or debited should be stored in a private property called `transactions`
* There should be a static method on the `BankAccount` class called `transactionHistory` that returns the private `transactions` property of the account passed in as an argument

#### `CheckingAccount`
* Should be a subclass of `BankAccount`
* If you attempt to overdraft your `CheckingAccount` you should receive a message telling you that you have insufficient funds to perform that action
* If the balance of a `CheckingAccount` ever falls below $50 as the result of a transaction, it should receive a $40 penalty fee

#### `SavingsAccount`
* Should be a subclass of `BankAccount`
* Should have a private `linkedCheckingAccount` property
* The `linkAccount` method should take a `CheckingAccount` as an argument and store it in the private `linkedCheckingAccount` property
* The `transfer` emthod should allow you to transfer money from your `SavingsAccount` to the linked `CheckingAccount`
* Should have a maximum number of debit transactions (10) associated with each `SavingsAccount`
* If the maximum number of debit transactions is passed you should receive a $50 penalty fee

#### `Member`
* Should have one public field containing the member's name
* Any instantiation of a `BankAccount` or its subclasses should require a member to instantiate
* A `Member`'s accounts should be private

## Polymorphism

You will create two functions that utilize polymorphism :
1. `distributeEvenly()`
1. `distributeToSavings()`

#### `distributeEvenly()`
* Should take an array of accounts and an amount to distribute as arguments
* Should distribute the provided amount divided evenly (i.e. to the nearest two-decimal-point number, rounded down) amongst the balances of the accounts in the array
#### `distributeToSavings()`
* Takes the same arguments as `distributeEvenly()`
* Should only add funds to instances of `SavingsAccounts` and not to instances of other types of accounts found in the array

## Stretch Goals
* Implement some concept of time so that interest can be applied to `SavingsAccounts`
* Implement a `CreditCard` class that develops interest. The balance of the `CreditCard` can be paid off using either `CheckingAccounts` or `SavingsAccounts`. In the cases of late payments a $25 penalty fee is applied to the balance of the `CreditCard`
* Create multiple banks that can open `BankAccounts` and its subclasses
* Add in functionality that gives a user readable spending analysis on a monthly basis

## Nightmare Mode

During this course, you'll be testing your JavaScript code with Jest.  However, in this workshop, you may have discovered that the tests are written to leverage [Mocha](https://mochajs.org) and [Chai](https://www.chaijs.com/). If you've gotten this far, you're probably not afraid of exploring some uncharted territory - right?  

To take your code to the next level:
* Read up on testing with Mocha and find out what Chai brings to the equation
* Create a new test file in the `spec` directory and find out how to include it so that it gets displayed with the other tests in the browser
* Write some excellent Mocha/Chai tests that test your code from the Stretch Goals above
* Create a `log` property accessible via `messageLog` getter on the BankAccount class that records debits, credits, and any automated event (such as fees, overdraft rejections, etc.) in order with a timestamp that records when they occurred
* Write the tests for the `messageLog` property
