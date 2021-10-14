import { useEffect, useState } from "react"
import axios from 'axios';

const CountryDetail = ({country, api_key}) => {
    const [weather, setWeather] = useState({});

    const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`

    useEffect(()=>{
        axios
      .get(weatherApiUrl)
      .then( response => {
          console.log(response.data)
          return setWeather(response.data)
      })
    }, [weatherApiUrl]);

    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>
                <ul>
                    <li> Capital: {country.capital} </li>
                    <li> Region: {country.region} </li>
                </ul>
            </div>
            <h3>Languages</h3>
            <ul>
                {Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img alt={`${country.name.common} Flag`} src={country.flags.png} />
           {/* {weather.something} */}
        </div>
    )
}

export default CountryDetail


