import {
    React,
   
    useEffect,
    useState,

}from 'react';
import Search from './search';
import styles from "./headerStyle.module.css"


const Header = () => {
    const [isCelsius, setIsCelsius] = useState(false)
    useEffect(() => {
        isCelsius ? console.log("y") : console.log("n")
    }, [isCelsius]

    );
    
    return( <div className={styles.header}>
        <div className={styles.appname}>
            Weather Forecast
        </div >
        <Search/>
           <div className={styles.tempselector}>
           <button className={styles.togglebtn} onClick={() => {setIsCelsius(!isCelsius)}}>{isCelsius ? "\u00B0C" : "\u00B0F"}</button>
           </div>
        
    </div>)
}





export default Header;