import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('')
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: '',
    humidity: '',
    minTemperature: '',
    weatherIcons: ''
  })

  useEffect(() => {
    fetchData(search)
  }, [])

  const fetchData = async (city) => {
    try {
      const APIKEY = '79ef842f9ca0472299ae129d52d3bf74'
      if (city === '') return
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
      await setAllData({
        city: result.data.name,
        country: result.data.sys.country,
        temperature: result.data.main.temp,
        humidity: result.data.main.humidity,
        minTemperature: result.data.main.temp_min,
        weatherIcons: result.data.weather[0].icon
      })
    } catch (e) {
      console.log('API not loaded correctly or loaded for the first time')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchData(search)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)

  }

  return (
    <main>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input value={search} type='text' name='city' placeholder='City Name' onChange={handleChange} />
          <button>Search</button>
        </form>
        <section>
          {allData.weatherIcons ?
            <img src={'https://openweathermap.org/img/wn/' + allData.weatherIcons + '@2x.png'} />
            : <></>
          }
          <h1>{allData.city}</h1>
          <h2>{allData.country}</h2>
          <div>
            <div>
              <h3>HUMIDITY</h3>
              <p>{allData.humidity}°F</p>
            </div>
            <div>
              <h3>TEMPERATURE</h3>
              <p>{allData.temperature}°F</p>
            </div>
            <div>
              <h3>MIN TEMPERATURE</h3>
              <p>{allData.minTemperature}°F</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App;