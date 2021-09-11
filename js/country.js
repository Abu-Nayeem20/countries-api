

// search result 

const loadSearchResult = () => {
    const getSearchField = document.getElementById('search-field');
    const searchText = getSearchField.value;
    // clear field value
    getSearchField.value = '';
    // api fetch
    const url = `https://restcountries.eu/rest/v2/name/${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data));

}

// display search country

const displaySearchResult = searchCountry => {
    const searchResult = document.getElementById('search-country');
    searchResult.textContent = '';
    const countryContainer = document.getElementById('countries');
    countryContainer.textContent = '';
    for(const country of searchCountry){
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <img src = "${country.flag}">
        <h4 class ='h4'> ${country.name} </h4>
        <p> ${country.capital} </p>
        <button onclick="countryByName('${country.name}')" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Details
        </button>
        `;
        searchResult.appendChild(div);
    }
}


const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data));
}

loadCountry();

const displayCountry = countries => {
    const countryContainer = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <img src = "${country.flag}">
        <h4 class ='h4'> ${country.name} </h4>
        <p> ${country.capital} </p>
        <button onclick="countryByName('${country.name}')" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Details
        </button>
        `;
        countryContainer.appendChild(div);
    });
}

const countryByName = name => {
    const modalTitle = document.getElementById('staticBackdropLabel');
    modalTitle.innerText = name;

    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));
}

const displayCountryDetails = country => {
    console.log(country);
    const modalContainer = document.getElementById('country-details');
    modalContainer.innerHTML = `
    <img src="${country.flag}">
    <p class="h4"> Capital: ${country.capital} <p>
    <p> Population: ${country.population} <p>
    <p> Nationality: ${country.demonym} <p>
    <p> Alpha Code: ${country.alpha2Code} <p>
    <p> Area: ${country.area} <p>
    <p> Calling Code: ${country.callingCodes[0]} <p>
    <p> Currency: ${country.currencies[0].code} (<span> ${country.currencies[0].name} </span>) <p> 
    <p> Language: ${country.languages[0].name}, Native Language: ${country.languages[0].nativeName}<p> 
    <p> Region: ${country.region}, Sub-Region: ${country.subregion} </p> 
    <p> TimeZone: ${country.timezones} </p> 
    <p> Domain: ${country.topLevelDomain} </p> 

    `;

}


const searchButton = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
}