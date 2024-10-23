import React from "react";
import styles from "./bodyStyle.module.css"

const HourlyWeather = (props) => {
    
    console.log(props.data)
    const dataArray = []
   
    for (let i = 0; i < 24; i++){

        dataArray.push({
            //date and month pending
            time: props.data.time[i],
            temp: props.data.temperature_2m[i],
            
            prep_prob: props.data.precipitation_probability[i],
        
        }

        )
        
        

    }
    console.log(dataArray)
    
    
    return(
        <div className={styles.hourlyContainer}>
            {dataArray.map(item => (
                <div className={styles.hourlyDiv} key={item.time}>
                    {item.time.slice(5)}<br></br>
                    {item.temp}<br></br>
                
                {item.prep_prob}
            </div>

            )
        )}      
                    

            
                
        
        
       </div>

    )
}

export default HourlyWeather;