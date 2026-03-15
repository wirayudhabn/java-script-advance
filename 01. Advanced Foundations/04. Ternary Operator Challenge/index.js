const playerGuess = 6
const correctAnswer = 6

// let message = ' '

// if (playerGuess === correctAnswer) {
//     message = 'Correct!'
// } else {
//     message = 'false!'
// }

// console.log(message)

// ternary operator


const message = playerGuess < correctAnswer ? 'too low' 
    : playerGuess > correctAnswer ? 'too high' 
    : 'correct answer'


console.log(message)