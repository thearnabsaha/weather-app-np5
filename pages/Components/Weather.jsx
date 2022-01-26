import { useState } from "react";

const Weather = () => {
    const [city, setCity] = useState("");
    const handleChange=(e) => {
        setCity(e.target.value)
    }
    return (
        <>
            <form action="">
                <input type="search" value={city} onChange={handleChange}/>
            </form>
        </>
    );
}

export default Weather;