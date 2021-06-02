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

    summary = () => {
        let ledger = this.ledger.reversed()
        for(let i = 0; i < ledger.length ; i++){
            let date = ledger[i].hasOwnProperty(key)
        }
    }

    // header = () => {
    //     console.log("          Date           || Debit || Credit || Balance")
    // }

    viewSummary = (ledger) => {

        let debit;
        let credit;
        let date;
        
        console.log("          Date           || Debit || Credit || Balance")
        for (let record of ledger.slice(1).reverse()){
          
          for (let amount in record){
            if (record[amount][0] > 0 && record[amount][0] !== undefined){
              credit = record[amount][0]
            }
            if (record[amount][0] < 0 && record[amount][0] !== undefined) {
              debit = record[amount][0]
            }
            if (debit == undefined){
              debit = ""
            }
            if (credit == undefined){
              credit = ""
            }
            if (record[amount][1] == undefined){
              record[amount][1] = ""
            }
            console.log(`${amount.slice(0,24)} ||  ${debit}   ||    ${credit}  || ${record[amount][1]}`)
            credit = "  "
            debit = "  "
          }
        }
        
        console.log(`${Object.keys(ledger[0]).join().slice(0,24)} ||       ||        || ${Object.values(ledger[0])}`);
        
        
        }
    

}

module.exports = Account;