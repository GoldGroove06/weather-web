import { useState } from 'react';
import './App.css';
import Header from './components/headerComponent/header'
import Body from "./components/bodyComponent/body"

function App() {
  const [isCelsius, setIsCelsius] = useState(true)
  const [latitude, setLatitude] = useState(31.3256)
  const [longitude, setLongitude] = useState(75.5792)
  const [location, setLocation] = useState("Jalandhar, Punjab, India")
  return (
    <div style={{backgroundColor:"blue"}}>
      <Header isCelsius = {isCelsius} setIsCelsius= {setIsCelsius} setLatitude={setLatitude} setLongitude= {setLongitude} setLocation= {setLocation}/>
      <Body isCelsius = {isCelsius} latitude={latitude} longitude={longitude} location={location}/>
    </div>
  );
}

export default App;
