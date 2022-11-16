import axios
    from "axios";

const searchButton = document.getElementById("searchButton")
searchButton.addEventListener('click',getCountryDataOnSearch);

const result = document.getElementById("searchResult");

async function getCountryDataOnSearch() {
    try{
// aanroepen van de data
        const searchQuery = document.getElementById("searchcountry").value;

        const response = await axios.get(`https://restcountries.com/v2/name/${searchQuery}`);
        const countries = response.data[0];

        console.log(countries);
        //resultaat data specificeren
        const nameCountry = countries.name;
        const flagCountry = countries.flags.png;
        const subareaCountry = countries.subregion;
        const populationCountry = countries.population;
        const capitalCountry = countries.capital;
        let currenciesCountry = "";
        // currencies ophalen
        if (countries.currencies.length === 1) {
            currenciesCountry = countries.currencies[0].name + "'s";
        }else {
            for (let i = 0; i < countries.currencies.length ; i++) {
                currenciesCountry += countries.currencies[i].name;
                currenciesCountry += "'s and "
            }
            // laatste and weghalen
            currenciesCountry = currenciesCountry.substring(0, currenciesCountry.length - 5);
        }

        // resultaat blokje samenstellen
        const item = document.createElement('li');
// vlag
        const searchCountryFlag = document.createElement("img");
        searchCountryFlag.setAttribute("alt", nameCountry + "_flag");
        searchCountryFlag.setAttribute("src",flagCountry);
        searchCountryFlag.setAttribute("class", "flag");
// naam van land
        const countryName = document.createElement("span");
        countryName.textContent = nameCountry;
// zinnetje
        const countryPopulation = document.createElement("p");
        countryPopulation.textContent = `${nameCountry} is situated in ${subareaCountry}. It has a population of ${populationCountry}. The capital is ${capitalCountry} and you can pay with ${currenciesCountry}.`;

        // alles plaatsen op de plek van results
        result.append(item);
        item.append(searchCountryFlag);
        item.append(countryName);
        item.append(countryPopulation);
    }
    catch (error) {
        console.error(error);
    }
}

