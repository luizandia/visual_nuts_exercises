import { buildCountryList } from '../../ultis/countryListFactory'
import {
    countCountries,
    getCountriesWithMostOfficialLanguages,
    getCountriesWithMostOfficialLanguagesByLanguage,
    getLanguagesList,
    getMostCommonLanguages,
} from '../../../src/exercise_2/country.js'

describe('EXERCISE 2 - country.js', () => {
    describe('countCountries', () => {
        test('SHOULD return empty WHEN countriesList is empty', () => {
            const countriesList = []
            expect(countCountries(countriesList)).toBe(0)
        })

        test('SHOULD return array length WHEN countriesList is not empty', () => {
            const countriesList = buildCountryList()
            expect(countCountries(countriesList)).toBe(countriesList.length)
        })
    })

    describe('getCountriesWithMostOfficialLanguages', () => {
        test('SHOULD return empty WHEN countriesList is empty', () => {
            const countriesList = []
            const mostLanguageCountries =
                getCountriesWithMostOfficialLanguages(countriesList)
            expect(mostLanguageCountries.length).toBe(0)
            expect(mostLanguageCountries).toEqual([])
        })

        test('SHOULD return single country WHEN single country of list have more official languages', () => {
            const countriesList = buildCountryList()
            const expectCountryList = countriesList.filter((country) => {
                return country.country === 'BE'
            })

            const mostLanguageCountries =
                getCountriesWithMostOfficialLanguages(countriesList)
            expect(mostLanguageCountries.length).toBe(1)
            expect(mostLanguageCountries).toEqual(expectCountryList)
        })

        test('SHOULD return multiple country WHEN multiple country of list have more official languages', () => {
            const countriesList = buildCountryList()
            countriesList.push({ country: 'BR', languages: ['nl', 'fr', 'de'] })

            const expectCountryList = countriesList.filter((country) => {
                return country.country === 'BE' || country.country === 'BR'
            })

            const mostLanguageCountries =
                getCountriesWithMostOfficialLanguages(countriesList)
            expect(mostLanguageCountries.length).toBe(2)
            expect(mostLanguageCountries).toEqual(expectCountryList)
        })
    })

    describe('getCountriesWithMostOfficialLanguagesByLanguage', () => {
        test('SHOULD return empty WHEN countriesList is empty', () => {
            const countriesList = []
            const countriesWithMostOfficialLanguagesByLanguage =
                getCountriesWithMostOfficialLanguagesByLanguage(
                    countriesList,
                    'en'
                )
            expect(countriesWithMostOfficialLanguagesByLanguage.length).toBe(0)
            expect(countriesWithMostOfficialLanguagesByLanguage).toEqual([])
        })

        test('SHOULD return single WHEN countriesList have single country that most speak oficial language and speak a specif language', () => {
            const countriesList = buildCountryList()
            countriesList.push({ country: 'BR', languages: ['en'] })
            const countriesWithMostOfficialLanguagesByLanguage =
                getCountriesWithMostOfficialLanguagesByLanguage(
                    countriesList,
                    'en'
                )

            const expectCountryList = countriesList.filter((country) => {
                return country.country === 'US' || country.country === 'BR'
            })

            expect(countriesWithMostOfficialLanguagesByLanguage.length).toBe(2)
            expect(countriesWithMostOfficialLanguagesByLanguage).toEqual(
                expectCountryList
            )
        })

        test('SHOULD return multiple WHEN countriesList have multiple country that most speak oficial language and speak a specif language', () => {
            const countriesList = buildCountryList()
            const countriesWithMostOfficialLanguagesByLanguage =
                getCountriesWithMostOfficialLanguagesByLanguage(
                    countriesList,
                    'en'
                )

            const expectCountryList = countriesList.filter((country) => {
                return country.country === 'US'
            })

            expect(countriesWithMostOfficialLanguagesByLanguage.length).toBe(1)
            expect(countriesWithMostOfficialLanguagesByLanguage).toEqual(
                expectCountryList
            )
        })
    })

    describe('getLanguagesList', () => {
        test('SHOULD return empty WHEN countriesList is empty', () => {
            const countriesList = []
            const languageList = getLanguagesList(countriesList)

            expect(Object.keys(languageList).length).toBe(0)
            expect(languageList).toEqual({})
        })

        test('SHOULD return languages list of object with count WHEN countriesList is not empty', () => {
            const countriesList = buildCountryList()
            const languageList = getLanguagesList(countriesList)

            expect(Object.keys(languageList).length).toBe(5)
            expect(languageList).toEqual({
                en: 1,
                nl: 2,
                fr: 1,
                de: 2,
                es: 1,
            })
        })
    })

    describe('getMostCommonLanguages', () => {
        test('SHOULD return empty WHEN countriesList is empty', () => {
            const countriesList = []
            const languageList = getMostCommonLanguages(countriesList)
            expect(languageList.length).toBe(0)
            expect(languageList).toEqual([])
        })

        test('SHOULD return single language WHEN countriesList have single most commom languages', () => {
            const countriesList = buildCountryList().filter((country) => {
                return country.country === 'NL'
            })
            const languageList = getMostCommonLanguages(countriesList)
            expect(languageList.length).toBe(1)
            expect(languageList).toEqual(['nl'])
        })

        test('SHOULD return multiple language WHEN countriesList have multiple most commom languages', () => {
            const countriesList = buildCountryList()
            const languageList = getMostCommonLanguages(countriesList)
            expect(languageList.length).toBe(2)
            expect(languageList).toEqual(['nl', 'de'])
        })
    })
})
