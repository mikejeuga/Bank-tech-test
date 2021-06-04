class Report {
    constructor(){
      
    }

    header = () => {
        console.log("          Date           || Debit || Credit || Balance")
    }


    printSummary = (ledger, tx) => {
        this.header()
        let date; let credit = " "; let debit = " "; let eodBalance = tx
        for (let i = ledger.length-1; i > 0; i--) {
                date = Object.keys(ledger[i]).join().slice(0,24)
                parseInt(Object.values(ledger[i])) > 0 ? credit = parseInt(Object.values(ledger[i])).toFixed(2) : credit
                parseInt(Object.values(ledger[i])) < 0 ? debit = parseInt(Object.values(ledger[i])).toFixed(2) : debit
                console.log(`${date} ||${debit}||${credit}|| ${eodBalance[i].toFixed(2)}`)
                credit = " "
                debit = " "
        }
          console.log(`${Object.keys(ledger[0]).join().slice(0,24)} ||  ||  || ${parseInt(Object.values(ledger[0])).toFixed(2)}`);
    }

}

module.exports = Report;