let currentTicketNumber = 0

function getNextTicketNumber() {
    return ++currentTicketNumber
}

console.log(`guest 1, your ticket number is ${getNextTicketNumber()}`)
console.log(`guest 2, your ticket number is ${getNextTicketNumber()}`)
console.log(`guest 3, your ticket number is ${getNextTicketNumber()}`)