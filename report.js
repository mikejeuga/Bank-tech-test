class Report {
    constructor(){
      
    }

    header = () => {
        console.log("          Date           || Debit || Credit || Balance")
    }

    printSummary = (ledger) => {
        this.header()
        for (let record of ledger.slice(1).reverse()){
            let debit;
            let credit;
            for (let amount in record){
                record[amount][0] > 0 && record[amount][0] !== undefined ? credit = record[amount][0] : credit = "  "
                record[amount][0] < 0 && record[amount][0] !== undefined ? debit = record[amount][0] : debit = "  "
                record[amount][1] == undefined ? record[amount][1] = "" : record[amount][1]
                console.log(`${amount.slice(0,24)} ||  ${debit}   ||    ${credit}  ||  ${record[amount][1]}`)
                credit = "  "
                debit = "  "
            }
          }
          
          console.log(`${Object.keys(ledger[0]).join().slice(0,24)} ||       ||        || ${Object.values(ledger[0])}`);
                
    }
}

module.exports = Report;