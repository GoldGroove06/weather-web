import {
    React,

}from 'react';
import Search from './search';
import styles from "./headerStyle.module.css"


const Header = (props) => {
    
    
    return( <div className={styles.header}>
        <div className={styles.appname}>
            Weather Forecast
        </div >
        <Search setLatitude= {props.setLatitude} setLongitude= {props.setLongitude} setLocation= {props.setLocation}/>
           <div className={styles.tempselector}>
           <button className={styles.togglebtn} onClick={() => {props.setIsCelsius(!props.isCelsius)}}>{props.isCelsius ? "\u00B0C" : "\u00B0F"}</button>
           </div>
        
    </div>)
}





export default Header;