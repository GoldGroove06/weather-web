import React from "react";
import styles from "./bodyStyle.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import IconFunction from "./iconFunction"


const WeeklyComponent = (props) => {
    const dataArray = []
    const daysOfWeek= [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]

    for (let i = 0; i < 7; i++){
       
        dataArray.push({
            //date and month pending

            date: `${daysOfWeek[ new Date(props.data.time[i]).getDay()]} `,
            max_temp: props.data.temperature_2m_max[i],
            min_temp: props.data.temperature_2m_min[i],
            prep_prob: props.data.precipitation_probability_max[i],
            wCode:props.data.weather_code[i]
        
        }

        )
        
        

    }
    console.log(dataArray)
    
    
    return(
        <div className={styles.weeklyContainer}>
            {dataArray.map(item => (
                <div className={styles.weeklyDiv} key={item.date}>
                    <IconFunction isDay={1} wCode = {item.wCode} cond={true}/>
                    <div style={{display:"flex",flex:2,}}>{item.date}</div>
                    <div style={{display:"flex",flex:1}}><i class="bi bi-droplet"></i>{item.prep_prob}%</div>
                <div style={{display:"flex",flex:1,justifyContent:"right"}}>{item.min_temp}/{item.max_temp}</div>
                
                </div>

            )
        )}
        </div>
    )
}

export default WeeklyComponent;
