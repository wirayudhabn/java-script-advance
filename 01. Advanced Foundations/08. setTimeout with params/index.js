// function displayTrafficLight(light) {
//     console.log(light)
// }

// setTimeout(displayTrafficLight, 3000, '🟢')

// displayTrafficLight('🔴')


function logAnswer(answer, point) {
    console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${point} points.`)
}

console.log('What is the capital of Peru?')

/*
Challenge:
1. After a 3 second delay, call the 'logAnswer' function.
2. Make sure 'logAnswer' has all the info it needs.
The answer is 'Lima' and it's 10 points for getting it right.
*/

const questionTimer = setTimeout(logAnswer, 10000, 'Lima', 10)

document.getElementById('stop').addEventListener('click', function() {
    clearTimeout(questionTimer)
    console.log('Cancelling...')
})