const Account = require("./account");


test('should increase the balance of the account', () => {
    let anAccount = new Account(0)
    anAccount.deposit(1)
    expect(anAccount.balance).toBe(1);
});

test('should decrease the balance of the account', () => {
    let anAccount = new Account(0)
    anAccount.withdraw(1)
    expect(anAccount.balance).toBe(-1);
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

test('the balance should account for all transactions', ()=> {
    let anAccount = new Account(0)
    anAccount.deposit(30)
    anAccount.withdraw(4)
    anAccount.withdraw(4)
    anAccount.deposit(3)
    expect(anAccount.balance).toBe(25)
})

