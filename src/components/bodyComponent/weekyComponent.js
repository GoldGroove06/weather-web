import React from "react";
import styles from "./bodyStyle.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
                    <div style={{justifyContent:"center",display:"flex",width:"90%"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
</svg>{item.prep_prob}%</div>
                <div style={{width:"8%",justifyContent:"center",display:"flex",}}>{item.min_temp}/{item.max_temp}</div>
                
                </div>

            )
        )}
        </div>
    )
}

export default WeeklyComponent;
