import React, { useEffect, useState , useRef} from "react";
import styles from "./searchStyle.module.css"
import searchIcon from "../../assets/images/searchIcon.png"
import axios from 'axios';
import ResultFeed from "./resultFeed";
import 'bootstrap/dist/css/bootstrap.min.css'; 




const Search = (props) => {
    const defaultResult = {
        "results": [
          {
            "id": 5128581,
            "name": "New York",
            "latitude": 40.71427,
            "longitude": -74.00597,
            "elevation": 10,
            "feature_code": "PPL",
            "country_code": "US",
            "admin1_id": 5128638,
            "timezone": "America/New_York",
            "population": 8175133,
            "country_id": 6252001,
            "country": "United States",
            "admin1": "New York"
          },
       {
            "id": 2950159,
            "name": "Berlin",
            "latitude": 52.52437,
            "longitude": 13.41053,
            "elevation": 74,
            "feature_code": "PPLC",
            "country_code": "DE",
            "admin1_id": 2950157,
            "admin3_id": 6547383,
            "admin4_id": 6547539,
            "timezone": "Europe/Berlin",
            "population": 3426354,
            "postcodes": [
              "10967",
              "13347"
            ],
            "country_id": 2921044,
            "country": "Germany",
            "admin1": "Land Berlin",
            "admin3": "Berlin, Stadt",
            "admin4": "Berlin"
          },
       {
            "id": 6167865,
            "name": "Toronto",
            "latitude": 43.70011,
            "longitude": -79.4163,
            "elevation": 175,
            "feature_code": "PPLA",
            "country_code": "CA",
            "admin1_id": 6093943,
            "timezone": "America/Toronto",
            "population": 2600000,
            "country_id": 6251999,
            "country": "Canada",
            "admin1": "Ontario"
          }, {
            "id": 2643743,
            "name": "London",
            "latitude": 51.50853,
            "longitude": -0.12574,
            "elevation": 25,
            "feature_code": "PPLC",
            "country_code": "GB",
            "admin1_id": 6269131,
            "admin2_id": 2648110,
            "timezone": "Europe/London",
            "population": 7556900,
            "country_id": 2635167,
            "country": "United Kingdom",
            "admin1": "England",
            "admin2": "Greater London"
          }
      ]
      }
    const [searchBox, setSearchBox] = useState(false)
    const [searchContent, setSearchContent]  = useState('')
    const [searchResult, setSearchResult] = useState(defaultResult)
    const searchRef = useRef(null);
    const inputRef = useRef(null);
    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    });

    const handleOutsideClick = (e) =>{
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchBox(false);
        inputRef.current.value='';
      }
    }
    
    useEffect(() => {
        
        if (searchContent !== "" && searchContent.length > 2){
            axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${searchContent}&count=10&language=en&format=json`)
        .then(response => { setSearchResult(response.data)})
        .catch(function (error) {console.log(error.response.status)})

        }
        if (searchContent.length < 2 ){
            setSearchResult(defaultResult)
        }
        
    },[searchContent])
    
   
    

    
    
    return(
        <div className={styles.searchbardiv} style={searchBox ? {height:"200px"} : {}} ref={searchRef}>
            <div className={styles.searchButton}><img src={searchIcon} alt="search Icon" className={styles.searchicon} /></div>
            
            <div  className={styles.searchContainer}>
           <input type='text' placeholder="Search City " className={styles.searchbar} onClick={() => {setSearchBox(true)}} ref={inputRef} onChange={(e) => { if (e.target.value !== ""){setSearchContent(e.target.value)}}}/>
           {searchBox ? (
            <div className={styles.searchresult}> <ResultFeed data = {searchResult} setLatitude= {props.setLatitude} setLongitude= {props.setLongitude} setLocation= {props.setLocation} setSearchBox= {setSearchBox} inputRef={inputRef}/> </div>
           ):
           ""}
          
           </div>
           <button className={styles.closeButton} onClick={() =>{ setSearchBox(false); inputRef.current.value=''}} style={searchBox ? {display:"block"}: {display:"none"}}><i class="bi bi-x-lg"></i></button>
           </div>
    )
}

export default Search;