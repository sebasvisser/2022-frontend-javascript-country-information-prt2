import axios
    from "axios";

const searchQuery = document.getElementById("searchcountry");
const searchButton = document.getElementById("searchButton")
const result = document.getElementById("searchResult");


async function getCountryDataOnSearch() {
    try{
// aanroepen van de data
        const response = await axios.get("https://restcountries.com/v2/all");
        const countries = response.data;
// op volgorde zetten
        countries.sort((a, b) => {
            return a.population - b.population;
        });

// Met map functie over alle items in de lijst gaan.
        countries.map((country) => {
            // li als container voor blokje per land
            const item = document.createElement('li');
            const countryFlag = document.createElement("img");
            const countryName = document.createElement("span");
            const countryPopulation = document.createElement("p");

            // Vlag
            countryFlag.setAttribute("alt", country.name + "_flag");
            countryFlag.setAttribute("src", country.flag);
            countryFlag.setAttribute("class", "flag");
            // Naam van Land
            countryName.setAttribute("class", getRegionClass(country.region));
            countryName.textContent = country.name;
            // Populatie zinnetje
            countryPopulation.setAttribute("class", getRegionClass(country.region));
            countryPopulation.textContent = "Has a population of " + country.population + " people";

// toevoegen aan de list
            list.append(item);
            item.append(countryFlag);
            item.append(countryName);
            item.append(countryPopulation);
        })

    }
    catch (error) {
        console.error(error);
    }
}


// Onderstaande laten werken met event listener
getCountryDataOnSearch();