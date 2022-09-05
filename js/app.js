const loadWeatherData = (city) => {
    const API_KEY = 'b1579f502865aec423c1f4c8b8a45401'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    fetch(url)
        .then(res => res.json())
        .then(data => getWeatherData(data))
}
const getWeatherData = (data) => {
    const cityName = document.getElementById('city-name').innerText = data.name;
    const cityTemp = document.getElementById('temp').innerText = data.main.temp;
    const cityWeaterCondition = document.getElementById('condition').innerText = data.weather[0].main;
    console.log(cityWeaterCondition);
}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field')
    const searchValue = searchField.value;
    searchField.value = ''
    loadWeatherData(searchValue);
    document.getElementById('search-field').addEventListener('keydown', function (e) {

        if (e.key === 'Enter') {
            loadWeatherData()
        }
    })
})

loadWeatherData('moulvibazar')
getWeatherData()
