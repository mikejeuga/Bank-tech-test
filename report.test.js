

const Report = require("./report");
const Account = require("./account")

global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
  }

test('the summary should have a formatted header that calls the console', () => {
    let report = new Report()
    report.header()
    expect(global.console.log).toHaveBeenCalledWith("          Date           || Debit || Credit || Balance")
});

test('the report should console.log every transaction', () => {
    let report = new Report()
    let account = new Account(450);
    report.printSummary(account.ledger)
    let aDate = new Date()
    expect(global.console.log).toHaveBeenCalledWith(`${aDate.toString().slice(0,24)} ||       ||        || 450`)
});

test('the report should console.log every transaction', () => {
    let report = new Report()
    let account = new Account(450);
    account.deposit(50)
    account.deposit(50)
    account.withdraw(70)
    report.printSummary(account.ledger)
    let aDate = new Date()
    expect(global.console.log).toHaveBeenCalledWith(`${aDate.toString().slice(0,24)} ||  -70   ||        ||  480`)
});