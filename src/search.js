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
        const countries = response.data;

        //resultaat data specificeren
        const nameCountry = countries.name;
        const flagCountry = countries.flag;
        const subareaCountry = countries.subregion;
        const populationCountry = countries.population;
        const capitalCountry = countries.capital;
        // const currenciesCountry = countries.currencies[0].name;

        // resultaat blokje samenstellen
        const item = document.createElement('li');
// vlag
        const countryFlag = document.createElement("img");
        countryFlag.setAttribute("alt", nameCountry + "_flag");
        countryFlag.setAttribute("src",flagCountry);
        countryFlag.setAttribute("class", "flag");
// naam van land
        const countryName = document.createElement("span");
        countryName.textContent = nameCountry;
// zinnetje
        const countryPopulation = document.createElement("p");
        countryPopulation.textContent = nameCountry +  " is situated in " + subareaCountry + ". It has a population of " + populationCountry + ". The capital is " + capitalCountry + "and you can pay with CURRENCY ";

        // alles plaatsen op de plek van results
        result.append(item);
        item.append(countryFlag);
        item.append(countryName);
        item.append("countryPopulation");
    }
    catch (error) {
        console.error(error);
    }
}

