import React from "react";
import styles from "./bodyStyle.module.css"
import IconFunction from "./iconFunction"

const HourlyWeather = (props) => {
    
   
    const dataArray = []
   
    for (let i = 0; i < 24; i++){

        dataArray.push({
            //date and month pending
            time: props.data.time[i],
            temp: props.data.temperature_2m[i],
            wCode: props.data.weather_code[i],
            prep_prob: props.data.precipitation_probability[i],
            
        }

        )
        
        

    }
    
    
    
    return(
        <div className={styles.hourlyContainer}>
            {dataArray.map(item => (
                <div className={styles.hourlyDiv} key={item.time}>
                    <div>{item.temp}{`\u00B0`}</div>
                    <div><IconFunction isDay={0} wCode = {item.wCode} cond={true} time={item.time.slice(11)} sunrise={props.sunrise} sunset={props.sunset} timeChange={true}/></div>
                    <div>{item.time.slice(11)}</div>
                    <div>{item.prep_prob}%</div>
            </div>

            )
        )}      
                    

            
                
        
        
       </div>

    )
}

export default HourlyWeather;