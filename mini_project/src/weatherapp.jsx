import Searchbox from "./searchbox";
import Infobox from "./infobox";
import { useState } from "react";
import "./weatherapp.css";

export default function Weatherbox() {
    const [weatherinfo, setweatherinfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo)=>{
        setweatherinfo(newInfo);
    }

    return (
        <div className="final">
            <h1>Weather App by Harshit</h1>
            <Searchbox updateInfo={updateInfo}/>
            <Infobox info={weatherinfo}/>
        </div>
    )
}