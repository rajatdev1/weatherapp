const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
const form= document.querySelector("form")
const search= document.querySelector("#search")
const weather= document.querySelector("#weather")

const getweather = async(city) =>{ 
    weather.innerHTML = `<h2> Loading... <h2>`

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response= await fetch(url)
    const data=await response.json()
    return showweather(data);
}

const showweather= (data) =>{
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    } 
    
    weather.innerHTML = `
    <div id="image">
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
        <div id="celci">
        <h2>${data.main.temp} °C</h2>
        <h4>${data.weather[0].main}</h4>
         </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getweather(search.value)
        event.preventDefault();
    }
)