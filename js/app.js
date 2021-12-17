async function getWeatherData(e) {
    e.preventDefault();

    const userInput = $('input[type="text"]').val();
    const apiKey = "5560995d480f9bf2304ccfb709751647";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    $("#name").html(data.name);
    $("#temp").html(data.main.temp);
    $("#desc").html(data.weather[0].description);
    console.log(response)
}

$("form").on("submit", getWeatherData);