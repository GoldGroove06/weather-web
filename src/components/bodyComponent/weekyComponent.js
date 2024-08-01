import React from "react";
import styles from "./bodyStyle.module.css"

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
        
        }

        )
        
        

    }
    console.log(dataArray)
    
    
    return(
        <div className={styles.weeklyContainer}>
            {dataArray.map(item => (
                <div className={styles.weeklyDiv} key={item.date}>
                    <div style={{width:"10%"}}>{item.date}</div>
                    <div style={{justifyContent:"center",display:"flex",width:"90%"}}>{item.prep_prob}</div>
                <div style={{width:"8%",justifyContent:"center",display:"flex",}}>{item.min_temp}/{item.min_temp}</div>
                
                </div>

            )
        )}
        </div>
    )
}

export default WeeklyComponent;
