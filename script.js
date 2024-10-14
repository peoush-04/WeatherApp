// Documentation present at mini project js 1 (important things to knwo)
// The symbols $ , { } and } are part of a JavaScript template literal, which is a way to embed expressions inside string literals using backticks
// C).
// Here's an explanation of each symbol's purpose within the template literal:
// Javascript:
// 'https : / / flagcdn . com/144x108/$ {weather Info? . sys? . country. toLowerCase ( ) } . png' ,
// country Icon. src =
// • The $ symbol is used to signal the start of a template literal expression.
// • The { } curly braces are used to enclose an expression that will be evaluated and inserted into the string. In this case, the expression is
// weatherlnfo? . sys? . country. toLowercase ( ) , which will evaluate to the lowercase two-letter country code used to generate the URL for
// the flag image.
// • The } symbol marks the end of the expression and the end of the template literal.
// Template literals are a powerful way to dynamically generate strings in JavaScript, allowing you to easily insert variables and expressions
// without having to concatenate multiple strings together.

// What is Optional Chaining_Qperator ?
// Optional chaining is a new JavaScript operator introduced in ECMAScript 2020 that makes it easier to safely access nested properties and
// methods of an object, without worrying about encountering errors if a property or method does not exist or is undefined. The operator is
// denoted by the question mark ( ? ) symbol and is often referred to as the "nullish coalescing operator".
// Here's an example of how optional chaining can be used:
// state: "NY" ,
// Javascript :
// let user =
// let zipcode =
// name: "Alice" ,
// address :
// user? . address? . zip;
// { city: "New York" ,
// • • "10001"
// ZIP .
// console . log (zipcode) ;
// // "10001"
// In this example, we have an object called user with two properties: name and address . The address property is itself an object that contains
// three sub-properties: city, state, and zip . We want to access the zip property of the address object, but we don't want to risk running
// into an error if the address object is null or undefined.
// Using optional chaining, we can add a ? symbol after each object property or method call, indicating that we want to perform the operation
// only if the property or method exists and is not null or undefined. In this case, if the address property or the zip property do not exist, the
// expression will simply evaluate to undefined, without throwing an error.

// cityName. innerText = weather Info? . name;
// cityName is the name of an HTML element that will display the city name.
// . innerText is a property of the HTML element that sets its visible text content.
// weatherlnfo is an object that contains information about the weather.
// ? . is the optional chaining operator, which allows you to access properties of an object that may be null or undefined without causing
// an error. In this case, it is used to access the name property of the weatherlnfo Object.
// s https : / / flagcdn . com/144x10B/$ {weather Info? . sys? . country. toLawerCase ( ) } .png
// country Icon . src
// countrylcon is the name of an HTML element that will display the country flag.
// . src is a property of the HTML element that sets the URL of the image to display.
// weatherlnfo is an object that contains information about the weather.
// ? . is the optional chaining operator, which allows you to access properties of an object that may be null or undefined without causing
// an error. In this case, it is used to access the sys property of the weatherlnfo object, and then the country property of the sys object.
// . toLowercase ( ) is a method that converts the value of a string to lowercase characters.
// desc. innerText = weatherlnfo? . weather? . [0) ? . main;
// desc is the name of an HTML element that will display the weather description.
// . inner-Text is a property of the HTML element that sets its visible text content.
// weatherlnfo is an object that contains information about the weather.
// ? . is the optional chaining operator, which allows you to access properties of an object that may be null or undefined without causing
// an error. In this case, it is used to access the weather property of the weatherlnfo object, and then the first element of the weather array,
// and then the main property of that element.

// weather Icon. src =
// : / / openweathermap . org/img/w/$ {weather Info? . weather? . [0] ? . icon } .png
// weatherlcon is the name of an HTML element that will display the weather icon.
// . src is a property of the HTML element that sets the URL of the image to display.
// weatherlnfo is an object that contains information about the weather.
// ? . is the optional chaining operator, which allows you to access properties of an object that may be null or undefined without causing
// an error. In this case, it is used to access the weather property of the weatherlnfo object, and then the first element of the weather array,
// and then the icon property of that element.
// temp. innerText =
// $ {weatherlnfo? . main? . temp. toFixed (2) } 0 C' ;
// temp is the name of an HTML element that will display the temperature.
// . innerText is a property of the HTML element that sets its visible text content.
// weatherlnfo is an object that contains information about the weather.
// ? . is the optional chaining operator, which allows you to access properties of an object that may be null or undefined without causing
// an error. In this case, it is used to access the main property of the weatherlnfo object, and then the temp property of that object.
// . toFixed() is a method that formats a number with a specified number of digits after the decimal point.


// Documentation - see here we have two tabs first your weather and next search weather 
// in "your weather" tab we have two tabs , one when u dont hv your current location ka latitude longitude then show grant access wala container else when u have current location ka lat n long safe/stored then display the weatherInfoContainer (i.e, the container displaying the weather ka info) 

const yourWeatherTab = document.querySelector("[data-yourWeather]");
const searchTab = document.querySelector("[data-searchWeather]");

const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector(".search-container");

const loadingScreen = document.querySelector(".loading-container");
const weatherInfoContainer = document.querySelector(".weather-info-container");

const errorNotFound =  document.querySelector(".error-not-found");

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

// see when we r at Your weather then a grey backgrd comes below the text and when we click on search weather then on search weather ka backgrd the grey color comes , so the current-tab wala class contains the css of the backgrd grey color  , and initially we are by default at Your weather wala tab so add current tab wala class in it
var currentTab = yourWeatherTab;
currentTab.classList.add("current-tab");

// initially we will be always at grant access wala container 
grantAccessContainer.classList.add("active");

const grantAccessBtn = document.querySelector("[grantAccessBtn]");
grantAccessBtn.addEventListener("click",getCurrentLocation);

function getCurrentLocation() {
    // this is the syntax to get your current location , see w3schools (simply copy and paste)
    
    if(navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no geolocation support available
        alert('GeoLocation Not Supported');
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    // The sessionStorage object let you store key/value pairs in the browser.
    // Note : The sessionStorage object stores data for only one session.
            // (The data is deleted when the browser is closed).

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    // see now got the latitue and longitude of current location , so fetch weather info by api call 
    fetchUserWeatherInfo_LatLong(userCoordinates);
}

async function fetchUserWeatherInfo_LatLong(userCoordinates)
{
    // see while fetching the weather info from the server , till then show a loading screen for better user experience but Note : your grant access wala container is still active so before displyaing loading screen remove grant access wala container 
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    // API Call
    try{
        const lat = userCoordinates.lat;
        const lon = userCoordinates.lon;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );

         const data = await response.json();
        // at line 146 your api call is successful so remove the loading screen and make weatherContainer visible and render the data/information dynamically from the api call to the div/conatiners of our weatherContainer
        loadingScreen.classList.remove("active");
        // first render the data from api call in thhe userContainer then display the userContainer
        renderWeatherInfo(data);

    }
    catch(err){
        // if some error occurs then now error not-found wala png but before that remove the loading screen 
        loadingScreen.classList.remove("active");
        errorNotFound.classList.add("active");
    }

}

function renderWeatherInfo(weatherInfo){
    //firstly, we have to fetch the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloud]");

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    //just a cdn link to get the source path of the image 
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

    // all datas from the api call were rendered in the UL elements so now make the weatherInfoContainer visible 
    weatherInfoContainer.classList.add("active");
}

// ****** completed the grant access location ***********
// now write the logic for switch tab , that is when I click on Search weather wala tab then search weather wala conatiner must be displayed and when i click on Your weather wala tab then 2 cases : if lat and longi of current location avaiable(stored in session Storage) then display the weatherInfoContainer else display the grant access Conatiner 

searchTab.addEventListener("click",()=>{
    if(currentTab != searchTab)
    {
        currentTab = searchTab;
        yourWeatherTab.classList.remove("current-tab");
        currentTab.classList.add("current-tab");
    
        //remove active classes from all other tabs
        grantAccessContainer.classList.remove("active");
        weatherInfoContainer.classList.remove("active");
        errorNotFound.classList.remove("active");

        searchForm.classList.add("active");
    }
})

yourWeatherTab.addEventListener("click",()=>{
    if(currentTab != yourWeatherTab)
        {
            currentTab = yourWeatherTab;
            searchTab.classList.remove("current-tab");
            currentTab.classList.add("current-tab");
        
            //remove active classes from all other tabs
            searchForm.classList.remove("active");
            weatherInfoContainer.classList.remove("active");
            errorNotFound.classList.remove("active");

            getfromSessionStorage();
        }
})

function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(localCoordinates == null) {
        //agar local coordinates nahi hai toh display grant access wala conatiner 
        grantAccessContainer.classList.add("active");
    }
    // else display the weather info of the curretn location using the lat and longi 
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo_LatLong(coordinates);
    }

}

// ******** completed the logic of tag switching ***************

// Now , the logic of search city weather is left 

const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(searchInput.value == "")
        return;
    else{
        let city = searchInput.value;
        fetchUserWeatherInfo_City(city);
    }
});

async function fetchUserWeatherInfo_City(city){
    console.log("hi");
    errorNotFound.classList.remove("active");
    loadingScreen.classList.add("active");
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
          if(!response.ok){
            throw new Error("City Not found");
          }

        const data = await response.json();
        // got the data from the server , so remove loading screen 
        loadingScreen.classList.remove("active");
        
        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
        weatherInfoContainer.remove("active");
        errorNotFound.classList.add("active");
    }
}