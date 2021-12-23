async function getWeatherData(e) {
    e.preventDefault();

    const userInput = $('input[type="text"]').val();
    const apiKey = "5560995d480f9bf2304ccfb709751647";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    $("#name").html(data.name);
    $("#temp").html(data.main.temp);
    $("#desc").html(data.weather[0].description);
    $("#icon").html(data.weather[0].icon)
    console.log(response)

    // return `
    //     <div class="card" style="width: 18rem;">
    //     <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="card-img-top" alt="">
    //         <div class="card-body">
    //             <dl id="weather-info">
    //                 <dt>City: ${data.name}</dt>
    //                 <dd id="name"></dd>
    //                 <dt>Temperature: ${data.main.temp}</dt>
    //                 <dd id="temp"></dd>
    //                 <dt>Description: ${data.weather[0].description}</dt>
    //                 <dd id="desc"></dd>
    //                 <dt>Icon:</dt>
    //                 <dd id="icon"></dd>
    //             </dl>
    //         </div>
    //     </div>
    // `
}

$("form").on("submit", getWeatherData);