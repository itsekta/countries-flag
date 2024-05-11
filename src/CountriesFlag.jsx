import { useEffect, useState } from "react";
import styles from './Countries.module.css';

function CountriesFlag() {
    const [countryFlag, setCountryFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountryFlag(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log("flag", countryFlag);

    return (
        <div className={styles.CountriesFlagWrap}>
            {countryFlag.map(country => (
                <div key={country.cca2} className={styles.CountryFlag}>
                    <img src={country.flags.png} alt={country.altSpellings[0]} style={{ width: "100px", height: "100px" }} />
                    <div>{country.name.common}</div>
                </div>
            ))}
        </div>
    );
}

export default CountriesFlag;
