import { useState } from "react";
import { MdSearch } from "react-icons/md";
const Weather = () => {
    const [city, setCity] = useState("");
    const handleChange=(e) => {
        setCity(e.target.value)
    }
    const handleSumbit =(e) => {
        e.preventDefault()
        if(city){

        }else{
            alert("type the city")
        }
        setCity("")
    }
    return (
        <>
            <div className="container">
                <div className="WeatherCard">
                    <form action="" className="searchbar" onSubmit={handleSumbit}>
                        <input type="search" value={city} onChange={handleChange}/>
                        <button type="submit"><MdSearch/></button>
                    </form>
                    <div className="weatherDetails">
                        <h1>Pune,In</h1>
                        <h2>23.4&#176; Cel</h2>
                        <h3>Min-18&#176; Cel | Max-30&#176; Cel</h3>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Weather;