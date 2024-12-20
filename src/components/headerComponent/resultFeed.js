
import styles from "./searchStyle.module.css"
import React from 'react';

function ResultFeed(props) {
 
  try {
    return (
      <div>
        {props.data.results.map(
        item => (
          <div onClick={() => {props.setLatitude(item.latitude); props.setLongitude(item.longitude); props.setLocation(`${item.name}, ${item.admin1}, ${item.country}`); props.setSearchBox(false); props.inputRef.current.value=''}}> {item.name},{item.admin1} ,{item.country}</div>
        )
  
        
  
      )}
    
      </div>
    )
  
  }
  catch(err){
    return(
      <div className={styles.resultFeedContainer}>
        No result Found
      </div>
    )
}
}


export default ResultFeed;