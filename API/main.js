const apiKey = "e6b20cd47f5547deb2a123755230405";
const searchBtn = document.querySelector("#search-btn");
const cityInput = document.querySelector("#city-input");
const weatherData = document.querySelector("#weather-data");


searchBtn.addEventListener("click", (e) => {
e.preventDefault()
    const city = cityInput.value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const location = data.location;
            const current = data.current;
console.log(data);
            const html = `

                        <h2>${location.name}, ${location.country}</h2>
                        <p>${current.temp_c}, ${current.temp_f}</p>
                        <p>${current.condition.text}</p>
                        <p>${current.wind_kph}</p>
                        <p>${current.humidity}</p>

    `;
            weatherData.innerHTML = html;
        })
        .catch((error) => {
            console.error(error);
            weatherData.innerHTML = "aaa"
        });


});