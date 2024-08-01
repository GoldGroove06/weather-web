import React, { useEffect, useState } from "react";
import styles from "./bodyStyle.module.css"
import locationIcon from "../../assets/images/locationIcon.png"
import loadingGif from "../../assets/images/loading.gif"
import axios from 'axios';

import HourlyWeather from "./hourlyWeather";
import WeeklyComponent from "./weekyComponent";


const Body = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        
    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=31.3256&longitude=75.5792&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto&forecast_hours=24`)
    .then(response => {setData(response.data);setLoading(false); console.log(response.data);})
    },[]
    );
    
    if (loading){
        return(<div className={styles.loadingContainer}><img src={loadingGif} alt="loading Gif" className={styles.loadingGif}></img></div>)
    }
    return(
        <div style={{backgroundColor:"blue"}}>
            
            <div className={styles.locationContainer}><img src={locationIcon} height={50} width={50} alt="locationIcon"/>Jalandhar, Punjab, India</div>
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
                Partly Cloudy <br></br>Feels like {data.current.apparent_temperature}{"\u00B0"}
                </div>
                <div className={styles.break}></div>
                {/* day night animation*/}
                  
                
                <HourlyWeather data = {data.hourly}/>
                
                </div>
            
                 <WeeklyComponent data = {data.daily}/>

            
            <h1>Current Conditions</h1>
            <div className={styles.currentCondContainer}>
                <div className={styles.currentCondDiv}> Wind {data.current.wind_speed_10m} {data.current.wind_direction_10m}</div> 
                <div className={styles.currentCondDiv}>Humidity {data.current.relative_humidity_2m}%</div> 
                <div className={styles.currentCondDiv}>UV Index {data.daily.uv_index_max[0]}</div> 
                <div className={styles.currentCondDiv}>pressure {data.current.surface_pressure}</div>

            </div>
            
            <div className={styles.risesetContainer}>
            {data.daily.sunrise[0]}{data.daily.sunset[0]}
            </div>
        </div>
    )

}

export default Body;