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
console.log(countries);
    }
    catch (error) {
        console.error(error);
    }
}

