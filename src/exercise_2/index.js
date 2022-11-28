import { getFilePath, readJsonFile } from './file_utils.js'
import {
    countCountries,
    getCountriesWithMostOfficialLanguagesByLanguage,
    getCountriesWithMostOfficialLanguages,
    getMostCommonLanguages,
} from './country.js'

async function main() {
    try {
        const path = getFilePath('data.json')
        const countriesList = await readJsonFile(path)

        const countrieLength = countCountries(countriesList)
        console.log(`0 -> We have ${countrieLength} countries in the list.\n`)

        const language = 'de'
        const germanSpeakCountryWithMostLanguage =
            getCountriesWithMostOfficialLanguagesByLanguage(
                countriesList,
                language
            )
        console.log(
            `1 -> The country that officially speak [${language}] and have most official languages are [${germanSpeakCountryWithMostLanguage.map(
                (country) => country.country
            )}].\n`
        )

        const highestOfficialLanguages =
            getCountriesWithMostOfficialLanguages(countriesList)
        console.log(
            `2 -> The country with highest number of official languages is [${highestOfficialLanguages.map(
                (country) => country.country
            )}].\n`
        )

        const mostCommonLanguages = getMostCommonLanguages(countriesList)
        console.log(
            `3 -> The most common official languages are [${mostCommonLanguages.map(
                (language) => language
            )}].\n`
        )
    } catch (error) {
        console.log('error -> ', error)
    }
}

main()
