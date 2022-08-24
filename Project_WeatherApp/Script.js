let result = document.getElementById('result');
let searchBtn = document.getElementById('search-btn');
let cityRef = document.getElementById('city');

//creating function to fetch weather detials via API and will display them
let getWeather = () => {
    let cityvalue = cityRef.value;
    //if city name is empty
    if (cityvalue.length == 0) {
        result.innerHTML = '<h3 class="msg">Please enter a city name</h3>';
    }
    //if input field is NOT empty
    else {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityvalue+'&units=metric&appid=5e53e9816e45b1d27d0fdda0a1aa4ab3';
        //clearing the input field
        cityRef.value ="";

        fetch(url).
        then((resp) => resp.json())
        //if city name is found not valid
        .then(data => 
            {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.main);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = '<h2>'+data.name+'</h2>';
            result.innerHTML += '<h2>'+data.weather[0].icon+'</h2>';
            result.innerHTML += '<h2>'+data.weather[0].main+'</h2>';
            result.innerHTML += '<h2>'+data.weather[0].description+'</h2>';
            result.innerHTML += '<h2>'+data.main.temp+'</h2>';
            result.innerHTML += '<h2>'+data.main.temp_min+'</h2>';
            result.innerHTML += '<h2>'+data.main.temp_max+'</h2>';            
        })
        //iif city name aint valid
        .catch(() => {
            result.innerHTML = '<h3 class="msg">City name not found</h3>';
        });
    }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);