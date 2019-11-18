// Your code here

/// start
/// row eqials an array
// the payroll system

let createEmployeeRecord = function (row){

console.log(row)

    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}


let createEmployeeRecords = function(RowData) {
    return RowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

console.log(createEmployeeRecords)
