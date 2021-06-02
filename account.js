class Account {
    constructor(balance, ledger) {
        this.balance = balance
        this.createDate = new Date()
        this.ledger = []
        let record = {}
        record[this.createDate] = this.balance
        this.ledger.push(record)
    }

    positiveRecord = (fund) => {
        let record = {}
        let time = new Date()
        record[time] = [fund, this.balance + fund]
        this.ledger.push(record)
    }

    negativeRecord = (fund) => {
        let record = {}
        let time = new Date()
        record[time] = [-fund, this.balance - fund]
        this.ledger.push(record)
    }

    deposit = (fund) => {
        if (fund < 0 ) {
            return
        }
        this.positiveRecord(fund)
        this.balance += fund
    }

    withdraw = (fund) => {
        if (fund < 0 ) {
            return
        }
        this.negativeRecord(fund)
        this.balance -= fund
    }
    
}

module.exports = Account;