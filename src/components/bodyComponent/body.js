import React, { useEffect, useState } from "react";
import styles from "./bodyStyle.module.css"
import locationIcon from "../../assets/images/locationIcon.png"
import loadingGif from "../../assets/images/loading.gif"
import axios from 'axios';
import IconFunction from "./iconFunction"
import HourlyWeather from "./hourlyWeather";
import WeeklyComponent from "./weekyComponent";


const Body = (props) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        
    axios.get('https://api.open-meteo.com/v1/forecast?&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,weather_code,precipitation_probability&daily=temperature_2m_max,weather_code,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto&forecast_hours=24',{
      params: {
        temperature_unit:props.isCelsius ? "celsius": "fahrenheit",
        longitude:props.longitude,
        latitude:props.latitude
        
    }
  }
    )
    .then(response => {setData(response.data);setLoading(false);})
    },[props.isCelsius, props.longitude, props.latitude]
    );
    
    if (loading){
        return(<div className={styles.loadingContainer}><img src={loadingGif} alt="loading Gif" className={styles.loadingGif}></img></div>)
    }
    return(
        
        <div style={{backgroundColor:"#FFF1DB"}}>
            
            <div className={styles.locationContainer}><img src={locationIcon} height={50} width={50} alt="locationIcon"/>{props.location}</div>
            <div className={styles.mainContainer}>
                <div className={styles.temphlContainer}>
                    <div className={styles.temp}>
                  {data.current.temperature_2m}{"\u00B0"}
                    </div>
                    <div className={styles.highlow}>
                    High: {data.daily.temperature_2m_max[0]}{"\u00B0"}  Low: {data.daily.temperature_2m_min[0]}{"\u00B0"}
                    </div>
                </div>
                <div className={styles.conditions}>
                    <div><IconFunction isDay={data.current.is_day} wCode = {data.current.weather_code}/></div><div>Feels like {data.current.apparent_temperature}{"\u00B0"}</div>
                </div>
                <div className={styles.break}></div>
                {/* day night animation*/}
                  
                
                <HourlyWeather data = {data.hourly} sunrise={data.daily.sunrise[0].slice(-5)} sunset={data.daily.sunset[0].slice(-5)}/>
                
                </div>
            
                 <WeeklyComponent data = {data.daily}/>
          
            
            <h1 className={styles.ccTag}>Current Conditions</h1>
            <div className={styles.currentCondContainer}>
                <div className={styles.currentCondDiv}><div className={styles.iconDiv}><i class="bi bi-wind"></i></div><div>Wind <br></br>{data.current.wind_speed_10m} km/hr<br></br> {data.current.wind_direction_10m}{`\u00B0`}</div></div> 
                <div className={styles.currentCondDiv}><div className={styles.iconDiv}><i class="bi bi-droplet-half"></i></div><div>Humidity <br></br>{data.current.relative_humidity_2m}%</div></div> 
                <div className={styles.currentCondDiv}><div className={styles.iconDiv}><i class="bi bi-brightness-high"></i></div><div>UV Index <br></br>{data.daily.uv_index_max[0]}</div></div> 
                <div className={styles.currentCondDiv}><div className={styles.iconDiv}><i class="bi bi-arrows-collapse"></i></div><div>Pressure <br></br>{data.current.surface_pressure}</div></div>

            
            <div className={styles.currentCondDiv}><div className={styles.iconDiv}><i class="bi bi-sunrise-fill"></i></div>Sunrise <br></br>{data.daily.sunrise[0].slice(-5)}</div><div className={styles.currentCondDiv}><div className={styles.iconDiv}><i class="bi bi-sunset-fill"></i></div>Sunset<br></br>{data.daily.sunset[0].slice(-5)}</div>
            </div>
        </div>
    )

}

export default Body;