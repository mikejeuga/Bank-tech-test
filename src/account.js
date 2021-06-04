class Account {
    constructor(balance) {
        this.balance = balance
        this.createDate = new Date()
        this.ledger = []
        let record = {}
        record[this.createDate] = this.balance
        this.ledger.push(record)
        this.tx = []
    }

    insertRecord = (fund) => {
        let record = {}
        let time = new Date()
        record[time] = fund
        this.ledger.push(record)
        this.balances(this.ledger)

    }

    deposit = (fund) => {
        if (fund < 0 ) {
            return
        }
        this.insertRecord(fund)
    }

    withdraw = (fund) => {
        if (fund < 0 ) {
            return
        }
        this.insertRecord(-fund)
    }

    private

    balances = (ledger) => {
        if (this.tx.length > 0) {
            this.tx = []
        }
        let count = 0
        for (let i = 0; i < ledger.length; i++){
          count += parseInt(Object.values(ledger[i]))
          this.tx.push(count)
        }
        return this.tx
      }
    
}


module.exports = Account;