/*

0 -> returns the number of countries in the world
1 -> finds the country with the most official languages, where they officially speak German
(de). - that counts all the official languages spoken in the listed countries.
2 -> to find the country with the highest number of official languages.
3 -> to find the most common official language(s), of all countries.

*/

import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

async function readJsonFile(path) {
    const data = await readFile(path)
    return JSON.parse(data)
}

function getFilePath(fileName) {
    const __fileName = fileURLToPath(import.meta.url)
    const __dirName = dirname(__fileName)
    return join(__dirName, fileName)
}

function countriesCount(countriesList) {
    return countriesList.length
}

function getCountriesWithMostOfficialLanguagesByLanguage(
    countriesList,
    language
) {
    //TODO: Should take care of sensitivy case?
    const filteredCountryList = countriesList.filter((country) =>
        country.languages.includes(language)
    )
    return getCountriesWithMostOfficialLanguages(filteredCountryList)
}

function getCountriesWithMostOfficialLanguages(countriesList) {
    let mostLanguageCountries = []

    for (let country of countriesList) {
        if (
            mostLanguageCountries.length === 0 ||
            country.languages.length > mostLanguageCountries[0].languages.length
        ) {
            mostLanguageCountries = [country]
        } else if (
            country.languages.length ===
            mostLanguageCountries[0].languages.length
        ) {
            mostLanguageCountries.push(country)
        }
    }

    return mostLanguageCountries
}

function getMostCommonLanguages(countriesList) {
    let languageCount = countriesList.reduce((languageCount, country) => {
        for (let language of country.languages) {
            if (!languageCount[language]) languageCount[language] = 0
            languageCount[language] += 1
        }
        return languageCount
    }, {})

    const arrayOfNumbers = Object.keys(languageCount).map(
        (language) => languageCount[language]
    )
    const maxLanguageNumber = Math.max(...arrayOfNumbers)

    const countries = Object.keys(languageCount).filter(
        (language) => languageCount[language] === maxLanguageNumber
    )

    return countries
}

async function main() {
    try {
        const path = getFilePath('data.json')
        const countriesList = await readJsonFile(path)

        const countrieLength = countriesCount(countriesList)
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
