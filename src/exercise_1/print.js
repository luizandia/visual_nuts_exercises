/* 
How will you keep this code safe from bugs? Show how you would guarantee that this code
keeps working when developers start making small feature adjustments. (Maybe we would
want to print the first 500 numbers, ...).

I would adding automatic testing with coverage to the CI/CD and alway reinforced the importance of testing with my team.
*/

const print = {
    isDivisibleBy: (number, by) => {
        return number % by === 0
    },

    printByValue: (int) => {
        const isDivisibleByThree = print.isDivisibleBy(int, 3)
        const isDivisibleByFive = print.isDivisibleBy(int, 5)

        if (isDivisibleByThree && isDivisibleByFive) {
            console.info('Visual Nuts')
        } else if (isDivisibleByThree) {
            console.info('Visual')
        } else if (isDivisibleByFive) {
            console.info('Nuts')
        } else {
            console.info(int)
        }
    },

    printIntergers: (times) => {
        for (let i = 1; i <= times; i++) {
            print.printByValue(i)
        }
    },
}

export default print
