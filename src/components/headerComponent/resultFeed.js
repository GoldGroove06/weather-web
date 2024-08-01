
import styles from "./searchStyle.module.css"
import React from 'react';

function ResultFeed(props) {
  console.log(props.data.results)
  try {
    return (
      <div>
        {props.data.results.map(
        item => (
          <div > {item.id}</div>
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