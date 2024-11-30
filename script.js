let weather = {
    apikey: "1898f0cf4b4fe185790674a4b3307513",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data)) // Call displayWeather with the fetched data
        .catch((error) => console.error("Error fetching weather data:", error));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(
            `Weather in ${name}:
            Description: ${description}
            Temperature: ${temp}°C
            Humidity: ${humidity}%
            Wind Speed: ${speed} km/h`
        );
        document.querySelector(".city").innerText =`Weather in ${name}`;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+ icon +".png";
        // const descElement = document.querySelector(".desc");
        // if (descElement) descElement.innerText = description;
        document.querySelector(".desc").innerText =` ${description}`;
        document.querySelector(".temp").innerText= ` ${temp}°C`
        document.querySelector(".humidity").innerText=` Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText=` Wind Speed: ${speed} km/h`;
        document.querySelector(".weather").classList.remove("loading");

    },
    search:function(){
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".btn").addEventListener("click", ()=>{

    weather.search();

});
document.querySelector(".searchbar").addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        weather.search();
    }

});
weather.fetchWeather("Pune")

// Example Usage:
