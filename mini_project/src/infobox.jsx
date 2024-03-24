import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infobox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';


export default function Infobox({ info }) {
    const IN_URL = "https://media.istockphoto.com/id/1809519803/photo/aesthetic-yellow-sunset-colors-visible-in-the-evening-sky.webp?b=1&s=170667a&w=0&k=20&c=c4H5_feWbl2cVVBV1_PCUaQtqBRqYikwPdTmn43JUAs=";

    const HOT_URL = "https://media.istockphoto.com/id/171571902/photo/blurred-people-walking-in-sunset-light.webp?b=1&s=170667a&w=0&k=20&c=cO8GP8UeIt6W1JMLFU_2khS5je3C5Q23scCh4GK0Ebg=";
    const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="infobox">
            <div className='card_container'>

                <Card sx={{ maxWidth: 345 }} >
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : info.temp > 15 ? <WbSunnyOutlinedIcon></WbSunnyOutlinedIcon> : <AcUnitIcon></AcUnitIcon>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temprature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temprature = {info.tempMin}</p>
                            <p>Max  Temprature = {info.tempMax}</p>
                            <p>The weather can described as <b>{info.weather}</b> and feels like {info.feelsLike}</p>

                        </Typography>
                    </CardContent>
                </Card>



            </div>
        </div>
    )
}