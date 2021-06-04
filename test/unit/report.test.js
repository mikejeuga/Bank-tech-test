const Account = require("../../src/account");
const Report = require("../../src/report");


global.console = {
    log: jest.fn()
  }

test('the summary should have a formatted header that calls the console', () => {
    let report = new Report()
    report.header()
    expect(global.console.log).toHaveBeenCalledWith("          Date           || Debit || Credit || Balance")
});

test('the report should console.log every transaction', () => {
    let report = new Report()
    let ledger =  [ { 'Fri Jun 04 2021 18:01:14 GMT+0100 (British Summer Time)': 450 } ]
    let tx = []
    report.printSummary(ledger, tx)
    let aDate = Object.keys(ledger[0])
    expect(global.console.log).toHaveBeenCalledWith(`${aDate.toString().slice(0,24)} ||  ||  || 450.00`)
});

test('the report should console.log every transaction', () => {
    let report = new Report()
    let ledger =  [
      { 'Fri Jun 04 2021 18:01:14 GMT+0100 (British Summer Time)': 450 },
      { 'Fri Jun 04 2021 18:01:23 GMT+0100 (British Summer Time)': 50 },
      { 'Fri Jun 04 2021 18:01:24 GMT+0100 (British Summer Time)': 50 },
      { 'Fri Jun 04 2021 18:01:28 GMT+0100 (British Summer Time)': -70 }
    ]
    let tx = [ 450, 500, 550, 480 ]
    report.printSummary(ledger, tx)
    let aDate = Object.keys(ledger[ledger.length-1])
    expect(global.console.log).toHaveBeenCalledWith(`${aDate.toString().slice(0,24)} ||-70.00|| || 480.00`)
});
