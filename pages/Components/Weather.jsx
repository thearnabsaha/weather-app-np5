import { useState } from "react";
import { MdSearch } from "react-icons/md";
const Weather = () => {
    const [city, setCity] = useState("");
    const handleChange=(e) => {
        setCity(e.target.value)
    }
    return (
        <>
            <form action="">
                <input type="search" value={city} onChange={handleChange}/>
                <button type="submit"><MdSearch/></button>
            </form>
        </>
    );
}

export default Weather;