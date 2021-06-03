const Account = require("../../src/account");


test('should increase the balance of the account', () => {
    let anAccount = new Account(0)
    anAccount.deposit(1)
    expect(anAccount.tx).toEqual([0, 1]);
});

test('should decrease the balance of the account', () => {
    let anAccount = new Account(0)
    anAccount.withdraw(1)
    expect(anAccount.tx).toEqual([0, -1]);
});

test('the deposit and withdraw functions should not have negative arguments', ()=> {
    let anAccount = new Account(0)
    anAccount.deposit(-1)
    anAccount.withdraw(-4)
    expect(anAccount.ledger.length).toBe(1)
})

test('the ledger should have a history of all transactions', ()=> {
    let anAccount = new Account(0)
    anAccount.deposit(1)
    expect(anAccount.ledger.length).toBe(2)
})


