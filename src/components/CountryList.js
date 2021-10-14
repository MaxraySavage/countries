const CountryList = ({countries, setCountryFilter}) => {
    return(
        <ul>
            {countries.map((country) => (
                <li key={country.name.common}>
                    {country.name.common}
                    <button onClick={()=>setCountryFilter(country.name.common)}>show</button>
                </li>
            ))}
        </ul>
    )
}

export default CountryList