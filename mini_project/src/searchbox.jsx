import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './searchbox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");

    const API_URl = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "65aff39cba65bf0044fa8cd24885fdbc";

    let getWeatherinfo = async () => {
        let respones = await fetch(`${API_URl}?q=${city}&appid=${API_KEY}&units=metric`);
        let jasonRespone = await respones.json();
        console.log(jasonRespone);
        let result = {
            city: city,
            temp: jasonRespone.main.temp,
            tempMin: jasonRespone.main.temp_min,
            tempMax: jasonRespone.main.temp_max,
            humidity: jasonRespone.main.humidity,
            feelsLike: jasonRespone.main.feels_like,
            weather: jasonRespone.weather[0].description,
        };
        console.log(result);
        return result;
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit =  async(evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherinfo();
        updateInfo(newInfo);

    };
    return (
        <div className='box'>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )

}