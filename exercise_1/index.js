/*
Write or describe an algorithm that prints the whole integer numbers to the console, start
from the number 1, and print all numbers going up to the number 100.
1 -> 100
However, when the number is divisible by 3, do not print the number, but print the word
'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for
all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.
is divisible by 3 -> 'Visual'
is divisible by 5 -> 'Nuts'
is divisible by 3 and 5 -> 'Visual Nuts'
other -> print number

How will you keep this code safe from bugs? Show how you would guarantee that this code
keeps working when developers start making small feature adjustments. (Maybe we would
want to print the first 500 numbers, ...).

TESTING
*/

function printIntergers() {
    const isDivisibleBy = (number, by) => number % by === 0
    const numbers = 100
    for (let i = 1; i <= numbers; i++) {
        const isDivisibleByThree = isDivisibleBy(i, 3)
        const isDivisibleByFive = isDivisibleBy(i, 5)

        if (isDivisibleByThree && isDivisibleByFive) {
            console.log('Visual Nuts')
        } else if (isDivisibleByThree) {
            console.log('Visual')
        } else if (isDivisibleByFive) {
            console.log('Nuts')
        } else {
            console.log(i)
        }
    }
}

printIntergers()
