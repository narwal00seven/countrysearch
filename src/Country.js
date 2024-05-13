import { useState, useEffect } from 'react';
import "./style.css";
import Flags from './Flag';

const apiurl = 'https://restcountries.com/v3.1/all';

function CountryFlag() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function fetchCountries() {
    try {
      const response = await fetch(apiurl);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter(
        (country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, countries]);

  return (
    <>
    <div className='inputes'>
        <input type = "text" 
        placeholder ="Search for countries" 
        onChange={(e) => setSearchTerm(e.target.value)}>
            </input></div>
    <div className="main">
      {filteredCountries.map((country) => (
        <Flags
          key={country.name.common}
          flagImg={country.flags.png}
          flagAlt={country.flags.alt}
          flagName={country.name.common}
        />
      ))}
      </div>
    </>
  );
}

export default CountryFlag;