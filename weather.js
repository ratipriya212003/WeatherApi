const apiKey="23a479c3a6f8f55d6ccb20656cfdda94";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.getElementById("weatherSearch");
const searchBtn=document.getElementById("searchBtn");
const weatherIcon=document.getElementsByClassName("weather-icon");


async function checkWeather(){
const cityName = searchBox.value;
let city=document.getElementById("city");
let temp=document.getElementById("temp");
let humidity=document.getElementById("humidity");
let wind=document.getElementById("wind");

console.log(city.innerHTML);
console.log(temp.innerHTML);
console.log(humidity.innerHTML);
console.log(wind.innerHTML);


try{
    const response=await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    const data= await response.json();
    city.innerText=data.name;
    temp.innerText=Math.round(data.main.temp) + "°c";
    humidity.innerText=data.main.humidity + "%";
    wind.innerText=data.wind.speed + "km/h";
    console.log("Succesful !!",data);

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "weatherAsset/clouds.png" ;
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "weatherAsset/clouds.png" ;
    }
   else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "weatherAsset/clouds.png" ;
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "weatherAsset/clouds.png" ;
    }
   else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "weatherAsset/clouds.png" ;
    }
}

catch (error){
console.log(error.message);
}
}