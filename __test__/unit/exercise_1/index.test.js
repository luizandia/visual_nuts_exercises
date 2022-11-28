import { jest } from '@jest/globals'
import print from '../../../src/exercise_1/print'

const isDivisibleBySpy = jest.spyOn(print, 'isDivisibleBy')
const printByValueSpy = jest.spyOn(print, 'printByValue')
const infoSpy = jest.spyOn(console, 'info')

describe('EXERCISE 1', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('isDivisibleBy', () => {
        test('SHOULD return the true WHEN integar is divisible per n', () => {
            const int = 15
            const n = 5
            expect(print.isDivisibleBy(int, n)).toBeTruthy()
        })

        test('SHOULD return the false WHEN integar is not divisible per n', () => {
            const int = 15
            const n = 4
            expect(print.isDivisibleBy(int, n)).toBeFalsy()
        })
    })

    describe('printByValue', () => {
        test('SHOULD print Visual Nuts WHEN integer is isDivisibleByThree and isDivisibleByFive', () => {
            const int = 15
            print.printByValue(int)
            expect(isDivisibleBySpy).toHaveBeenCalledWith(int, 3)
            expect(isDivisibleBySpy).toHaveBeenCalledWith(int, 5)
            expect(infoSpy).toHaveBeenCalledWith('Visual Nuts')
        })

        test('SHOULD print Visual WHEN integer is only isDivisibleByThree', () => {
            const int = 9
            print.printByValue(int)
            expect(isDivisibleBySpy).toHaveBeenCalledWith(int, 3)
            expect(isDivisibleBySpy).toHaveBeenCalledWith(int, 5)
            expect(infoSpy).toHaveBeenCalledWith('Visual')
        })

        test('SHOULD print Nuts WHEN integer is only isDivisibleByFive', () => {
            const int = 10
            print.printByValue(int)
            expect(isDivisibleBySpy).toHaveBeenCalledWith(int, 3)
            expect(isDivisibleBySpy).toHaveBeenCalledWith(int, 5)
            expect(infoSpy).toHaveBeenCalledWith('Nuts')
        })

        test('SHOULD print integer WHEN integer is not isDivisibleByFive and isDivisibleByFive', () => {
            const int = 1
            print.printByValue(int)
            expect(isDivisibleBySpy).toHaveBeenCalledWith(int, 3)
            expect(isDivisibleBySpy).toHaveBeenCalledWith(int, 5)
            expect(infoSpy).toHaveBeenCalledWith(int)
        })
    })

    describe('printIntergers', () => {
        test('SHOULD call WHEN printIntergers was called', () => {
            const int = 100
            print.printIntergers(int)

            expect(printByValueSpy).toHaveBeenCalledWith(1)
            expect(printByValueSpy).toHaveBeenCalledWith(int)
            expect(printByValueSpy).toHaveBeenCalledTimes(int)
        })
    })
})
