import { useState } from "react";
import { MdSearch } from "react-icons/md";
const Weather = () => {
    const [city, setCity] = useState("");
    const handleChange=(e) => {
        setCity(e.target.value)
    }
    return (
        <>
            <div className="container">
                <div className="WeatherCard">
                    <form action="" className="searchbar">
                        <input type="search" value={city} onChange={handleChange}/>
                        <button type="submit"><MdSearch/></button>
                    </form>
                    <div className="weatherDetails">
                        <h1>Pune</h1>
                        <h2>23.4&#176; Cel</h2>
                        <h3></h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;