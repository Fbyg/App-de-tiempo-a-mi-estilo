const apiKey = '3e9afef20a1840805f558531465a4505';

function getWeather() {
    const cityInput = document.getElementById('city');
    const cityName = cityName.value;

    if (cityName === '') {
        alert('Por favor ingrese el nombre de la poblacion');
        return;
    }

    /* API de Openweather */
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric';

    fetch(apiUrl)
    .then(Response => Response.json())
    .then(data => {
        displayWeather(data);
    })

    .catch(Error => {
        console.error('Error al obtener datos mas precisos del tiempo', Error);  
    })

    function displayWeather(data) {
        const weatherContainer = document.getElementById('weather-container');
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
    
        const weatherHTML = `
            <h2>${cityName}</h2>
            <p>Temperatura: ${temperature}°C</p>
            <p>Descripción: ${description}</p>
        `;
    
        weatherContainer.innerHTML = weatherHTML;
    }
}