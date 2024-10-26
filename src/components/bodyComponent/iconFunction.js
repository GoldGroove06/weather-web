
import React, { useState , useEffect}  from "react";

const IconFunction = (props) =>{
    const [isDay, setIsDay] = useState(0);
    const [path, setPath] = useState("");
    const [condition, setCondition] = useState("");
    
    const wmoDay = {
        0: {"icon": "day.svg", "description": "Clear sky"},
        1: {"icon": "cloudy-day-1.svg", "description": "Mainly clear"},
        2: {"icon": "cloudy-day-1.svg", "description": "Partly cloudy"},
        3: {"icon": "cloudy.svg", "description": "Overcast"},
        45: {"icon": "fog.svg", "description": "Fog"},
        48: {"icon": "fog.svg", "description": "Depositing rime fog"},
        51: {"icon": "rainy-2.svg", "description": "Light drizzle"},
        53: {"icon": "rainy-1.svg", "description": "Moderate drizzle"},
        55: {"icon": "rainy-3.svg", "description": "Dense drizzle"},
        61: {"icon": "rainy-4.svg", "description": "Slight rain"},
        63: {"icon": "rainy-5.svg", "description": "Moderate rain"},
        65: {"icon": "rainy-6.svg", "description": "Heavy rain"},
        71: {"icon": "snowy-1.svg", "description": "Slight snow fall"},
        73: {"icon": "snowy-2.svg", "description": "Moderate snow fall"},
        75: {"icon": "snowy-3.svg", "description": "Heavy snow fall"},
        77: {"icon": "snowy-1.svg", "description": "Snow grains"},
        80: {"icon": "rainy-5.svg", "description": "Slight rain showers"},
        81: {"icon": "rainy-5.svg", "description": "Moderate rain showers"},
        82: {"icon": "rainy-5.svg", "description": "Violent rain showers"},
        85: {"icon": "snowy-4.svg", "description": "Slight snow showers"},
        86: {"icon": "snowy-6.svg", "description": "Heavy snow showers"},
        95: {"icon": "thunder.svg", "description": "Slight thunderstorm"},
        96: {"icon": "thunder.svg", "description": "Slight thunderstorm with hail"},
        99: {"icon": "thunder.svg", "description": "Heavy thunderstorm with hail"}
    }
    
    
    
    const wmoNight = {
        0: {"icon": "night.svg", "description": "Clear sky"},
        1: {"icon": "cloudy-night-1.svg", "description": "Mainly clear"},
        2: {"icon": "cloudy-night-1.svg", "description": "Partly cloudy"},
        3: {"icon": "cloudy.svg", "description": "Overcast"},
        45: {"icon": "fog.svg", "description": "Fog"},
        48: {"icon": "fog.svg", "description": "Depositing rime fog"},
        51: {"icon": "rainy-4.svg", "description": "Light drizzle"},
        53: {"icon": "rainy-5.svg", "description": "Moderate drizzle"},
        55: {"icon": "rainy-6.svg", "description": "Dense drizzle"},
        61: {"icon": "rainy-4.svg", "description": "Slight rain"},
        63: {"icon": "rainy-5.svg", "description": "Moderate rain"},
        65: {"icon": "rainy-6.svg", "description": "Heavy rain"},
        71: {"icon": "snowy-4.svg", "description": "Slight snow fall"},
        73: {"icon": "snowy-5.svg", "description": "Moderate snow fall"},
        75: {"icon": "snowy-6.svg", "description": "Heavy snow fall"},
        77: {"icon": "snowy-4.svg", "description": "Snow grains"},
        80: {"icon": "rainy-5.svg", "description": "Slight rain showers"},
        81: {"icon": "rainy-5.svg", "description": "Moderate rain showers"},
        82: {"icon": "rainy-5.svg", "description": "Violent rain showers"},
        85: {"icon": "snowy-4.svg", "description": "Slight snow showers"},
        86: {"icon": "snowy-6.svg", "description": "Heavy snow showers"},
        95: {"icon": "thunder.svg", "description": "Slight thunderstorm"},
        96: {"icon": "thunder.svg", "description": "Slight thunderstorm with hail"},
        99: {"icon": "thunder.svg", "description": "Heavy thunderstorm with hail"}
    
    }
    useEffect(() => {
    setIsDay(props.isDay); 
    if (props.timeChange){
        if (props.time >= props.sunrise && props.time< props.sunset) {
            setIsDay(1);  // Daytime
          } else {
            setIsDay(0);  // Nighttime
          }
    }
    

    isDay === 1 ? setPath(`./animated/${wmoDay[props.wCode].icon}`):setPath(`./animated/${wmoNight[props.wCode].icon}`);
    props.day === 1 ? setCondition(`${wmoDay[props.wCode].description}`):setCondition(`${wmoNight[props.wCode].description}`);
    }, [isDay,props]);
    

    return (
       
        <span>
           {console.log()}
            <img src={path} alt="" height="60px" width="60px"></img><br></br> {props.cond ? "":condition}
        </span>
    )

}

export default IconFunction