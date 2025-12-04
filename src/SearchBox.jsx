import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL= "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY="4bb5e531da2a0c25e19fe9d31fd75c00";

  const getWeatherInfo = async () => {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const jsonResponse = await response.json();

    if (jsonResponse.cod === "404") {
      throw new Error("Invalid City");
    }

    return {
      city,
      temperature: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    }

    setCity("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField 
          id="city" 
          label="City Name" 
          variant="outlined" 
          required 
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && <p style={{color:"red"}}> No such city found in the API.</p>}
      </form>
    </div>
  );
}



