import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",        
feelsLike: undefined,
humidity: 67,
tempMax: 13.05,
tempMin: 13.05,
temperature: 13.05,
weather: "Haze",
    });

let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
}

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by ||Fatimaa||</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}