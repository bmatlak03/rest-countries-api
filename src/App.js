import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import Layout from "./components/Layout/Layout";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import FilterSection from "./components/FilterSection/FilterSection";

let COUNTRIES = [];

function App() {
  const [loading, setIsLoading] = useState(false);
  const [region, setRegion] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentCountries, setCurrentCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://restcountries.com/v2/all").then((res) => {
      COUNTRIES = res.data;
      setCurrentCountries(COUNTRIES);
      setIsLoading(false);
    });
  }, []);

  const handleRegionChange = (e) => {
    setInputValue("");
    const countriesCopy = [...COUNTRIES];
    const filteredCountry = countriesCopy.filter(
      (country) => country.region === e.target.value
    );
    setCurrentCountries(filteredCountry);
    setRegion(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setRegion("");
    const countriesCopy = [...COUNTRIES];
    const result = countriesCopy.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCurrentCountries(result);
  };
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <FilterSection
            region={region}
            onRegionChange={(region) => handleRegionChange(region)}
            inputValue={inputValue}
            onInputChange={handleInputChange}
          />
          <Countries
            selectedRegion={region}
            loading={loading}
            countriesData={currentCountries}
          />
        </Route>
        <Route path="/:name">
          <CountryDetails />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
