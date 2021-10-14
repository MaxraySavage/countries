import CountryDetail from "./CountryDetail";
import CountryList from "./CountryList"

const CountryDisplay = ({countries, setCountryFilter, api_key}) => {
    if (countries.length > 10) {
        return (
            <div>
                'Too many countries, please refine your search'
            </div>
        )
    } else if(countries.length === 1) {
        return (
            <CountryDetail country={countries[0]} api_key={api_key} />
        );
    }
    return(
        <CountryList countries={countries} setCountryFilter={setCountryFilter} />
    )
}

export default CountryDisplay