import axios from 'axios';
import React, {useEffect, useState} from 'react'
import InputField from './components/InputField'
import CountryDisplay from './components/CountryDisplay';

const App = () => {
  const [countryFilter, setCountryFilter] = useState('');
  const handleCountryFilterChange = (e) => setCountryFilter(e.target.value);
  const countryFilterField = {
    title: 'Find Countries',
    value: countryFilter,
    changeHandler: handleCountryFilterChange
  }

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then( response => setCountries(response.data))
  }, []);

  const countriesToShow = countries.filter(country => (
    country.name.common.toLowerCase().indexOf(countryFilter.toLowerCase()) !== -1
  ));

  const api_key = process.env.REACT_APP_API_KEY;

  return (
    <div>
      <InputField field={countryFilterField}/>
      {
        countriesToShow.length > 10 
        ? 'Too many countries, please refine your search'
        : <CountryDisplay countries={countriesToShow} setCountryFilter={setCountryFilter} api_key={api_key} />
      }
    </div>
  )
}

export default App