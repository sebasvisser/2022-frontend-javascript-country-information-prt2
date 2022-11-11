import axios
    from "axios";

const list = document.getElementById("country-list");

async function getCountryData() {
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

function getRegionClass(currentRegion) {
    switch (currentRegion) {
        case 'Africa':
            return 'africa';
        case 'Americas':
            return 'americas';
        case 'Asia':
            return 'asia';
        case 'Europe':
            return 'europe';
        case 'Oceania':
            return 'oceania';
        default:
            return 'default';
    }
}

getCountryData();