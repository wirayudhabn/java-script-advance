const exerciseTimeMins = 40

const message = exerciseTimeMins < 30 ? 'You need to try harder!' : exerciseTimeMins < 60 ? 'Doing good!' : 'Doing Exellent !'
console.log(message)