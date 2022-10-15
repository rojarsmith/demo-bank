import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: ''
  })

  useEffect(() => {
    fetchData('Taipei')
  }, [])

  const fetchData = async (city) => {
    try {
      const APIKEY = '79ef842f9ca0472299ae129d52d3bf74'
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
      await setAllData({
        city: result.data.name,
        country: result.data.sys.country,
        temperature: result.data
      })
    } catch (e) {
      console.log('API not loaded correctly or loaded for the first time')
    }
  }

  return (
    <>
      <div>{allData.country}, {allData.city}</div>
    </>
  )
}

export default App;