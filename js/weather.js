const apiKey = "f8b2a288da67f5dc49818e72b90d0f3c";

const city = "Ghaziabad";

async function getWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather data not found");
        }

        const data = await response.json();

        document.getElementById("city").textContent = data.name;
        document.getElementById("temp").textContent = Math.round(data.main.temp) + "°C";
        document.getElementById("condition").textContent = data.weather[0].main;
        document.getElementById("humidity").textContent = "Humidity: " + data.main.humidity + "%";
        document.getElementById("wind").textContent = "Wind: " + data.wind.speed + " m/s";

    } catch (error) {
        document.getElementById("city").textContent = "Error";
        document.getElementById("condition").textContent = "Unable to load weather";
    }
}

getWeather();