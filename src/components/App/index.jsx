import React from "react";
import axios from "axios";
import CustomCheckBox from "../CustomCheckBox";
import CustomInput from "../CustomInput/index";
import FormOptions from "../FormOptions/index";
import "./App.css";

function App() {
  const [countries, setCountries] = React.useState([]);
  const [showSelectedOnly, setShowSelectedOnly] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function handleOnChange(ev) {
    setInputValue(ev.target.value);
  }
  function handleCheck(name, ev) {
    const checked = ev.target.checked;
    const country = countries.filter((country) => {
      if (country.name === name) {
        return true;
      }
      return false;
    })[0];
    if (country.checked !== checked) {
      setCountries((countries) =>
        countries.map((country) => {
          if (country.name === name) {
            return { ...country, checked };
          } else {
            return country;
          }
        })
      );
    }
  }
  function handleShowSelected(ev) {
    setShowSelectedOnly(ev.target.checked);
  }
  function handleClearAll() {
    setCountries((countries) =>
      countries.map((country) => ({ ...country, checked: false }))
    );
  }

  React.useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then(({ data: countries }) => {
        const mappedCountries = countries.map(({ name }) => ({
          name,
          checked: false,
        }));
        setCountries(mappedCountries);
        if (error !== null) {
          setError(null);
        }
      })
      .catch((error) => {
        setError(error.toString());
      });
  }, []);

  return (
    <div className="app">
      <CustomInput handleOnChange={handleOnChange} />
      <div className="hr_line" />
      <FormOptions
        handleClearAll={handleClearAll}
        handleShowSelected={handleShowSelected}
      />
      <div className="list_container">
        {error && <div className="error">{error}</div>}
        {!error && countries.length === 0 && (
          <div className="loading">
            <p>Loading ...</p>
          </div>
        )}
        {!error &&
          countries
            .filter((country) => {
              const rx = new RegExp(`${inputValue}`, "gi");
              if (country.name.match(rx)) {
                if (showSelectedOnly) {
                  if (country.checked) {
                    return true;
                  }
                  return false;
                }
                return true;
              } else {
                return false;
              }
            })
            .map(({ name, checked }, index) => {
              return (
                <div key={index} className="list_item">
                  <CustomCheckBox
                    checked={checked}
                    handleChange={(ev) => handleCheck(name, ev)}
                  />
                  <p>{name}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
