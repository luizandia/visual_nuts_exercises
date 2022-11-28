//- returns the number of countries in the world
const countCountries = (countriesList) => {
    return countriesList.length
}

//- to find the country with the highest number of official languages.
const getCountriesWithMostOfficialLanguages = (countriesList) => {
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

/*- finds the country with the most official languages, where they officially speak German
    (de). - that counts all the official languages spoken in the listed countries */
const getCountriesWithMostOfficialLanguagesByLanguage = (
    countriesList,
    language
) => {
    const filteredCountryList = countriesList.filter((country) =>
        country.languages.includes(language)
    )
    return getCountriesWithMostOfficialLanguages(filteredCountryList)
}

function getLanguagesList(countriesList) {
    return countriesList.reduce((languagesList, country) => {
        for (let language of country.languages) {
            if (!languagesList[language]) languagesList[language] = 0
            languagesList[language] += 1
        }
        return languagesList
    }, {})
}

// - to find the most common official language(s), of all countries.
const getMostCommonLanguages = (countriesList) => {
    const languagesList = getLanguagesList(countriesList)

    const arrayOfNumbers = Object.keys(languagesList).map(
        (language) => languagesList[language]
    )
    const maxSpokenLanguages = Math.max(...arrayOfNumbers)

    const mostSpokenCommonLanguages = Object.keys(languagesList).filter(
        (language) => languagesList[language] === maxSpokenLanguages
    )

    return mostSpokenCommonLanguages
}

export {
    countCountries,
    getCountriesWithMostOfficialLanguages,
    getCountriesWithMostOfficialLanguagesByLanguage,
    getLanguagesList,
    getMostCommonLanguages,
}
