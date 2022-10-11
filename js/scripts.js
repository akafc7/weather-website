const apiKey = 'fe89384a5acd38a496607d1acb7fe554';
const apiCountryURL = 'https://countryflagsapi.com/png/';

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const showWeatherData = city => {
    console.log(city);
};

searchBtn.addEventListener('click', e => {
    e.preventDefault();

    const city = cityInput.value;
    showWeatherData(city);
});
