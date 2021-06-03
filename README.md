# Bank-Tech-Test

The task here is to write a program meeting the below requirements: 

* You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)

* Deposits, withdrawal.

* Account statement (date, amount, balance) printing.

* Data can be kept in memory (it doesn't need to be stored to a database or anything).


The Bank test focuses on looking at my processes and best practices when writing code.
The emphases will be put on keeping the code clean (functional, readable, extendable,...etc) but also on testing and documentation.

## User Stories
```
As a client,
So that I can keep my money in safe place,
I want to be able to create a bank account.
```

```
As a client,
So that I can use my money easily,
I want to be able to withdraw funds from my bank account.
```

```
As a client,
So that I can grow my bank account,
I want to be able to deposit some money into my bank account.
```

```
As a client,
So that I can manage my bank account,
I want to be able to see a report of my financial activity.
```

## Acceptance criteria

Given a client makes a deposit of 50 on Wed Jun 02 2021.

And a deposit of 50 on Wed Jun 02 2021.

And a withdrawal of 70 on Wed Jun 02 2021
When they/she/he print(s) them/her/his bank statement.

Then they/she/he would see:


```
         Date            || Debit || Credit || Balance
Wed Jun 02 2021 18:00:14 ||  -70.00  ||        ||  480.00
Wed Jun 02 2021 18:00:09 ||       ||    50.00  ||  550.00
Wed Jun 02 2021 18:00:07 ||       ||    50.00  ||  500.00
Wed Jun 02 2021 18:00:00 ||       ||        ||  450.00
```

## Running the program
![alt text](https://travis-ci.com/mikejeuga/Bank-tech-test.svg?branch=main)


The language of choice for this project is Javascript, below is a step-by-step walkthough.

* Clone the repo.
* You can use the browser console or the node REPL.
* If you choose to run the program in the command line: 

 Run ```node``` then ```.load account.js``` and ```.load report.js```
* In any case...
  
Create an account:

``` let anAccount = new Account(100)```

Add money to your account:

```anAccount.deposit(50)```

Withdraw money from your account:

```anAccount.withdraw(10)```

Create a report:

``` let report = new Report()```

Generate a statement: 

```report.printSummary(anAccount.ledger)```

finally to run test: 

```npm test```

## Design 

Classes in Javascript allow to express OOP thinking a little more "naturally". 

In this project as seen above there are 2 classes. An account class and a report class.

The first is responsible for the management of the account, recording entries and keeping the account up to date.

The Report class is responsible for generating the report. The function responsible for generating the report take an account ledger argument coming from the Account class.

## Other technologies used

For testing:

 ```Jest library```

For running program and loading other dependencies: 
 ```Node``` and ```NPM```



