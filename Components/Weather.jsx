// api.openweathermap.org/data/2.5/weather?q={kolkata}&appid={37a5daa95bc7084635e04654911452c8}
const Weather = ({weather}) => {
    console.log(weather)
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="searchBar">
                        <form action="">
                            <input type="text" placeholder="Your City"/>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div className="weatherBox">
                        <div className="mainIcon">@</div>
                        <div className="top">
                            <div className="left">
                                <h1>25.31°</h1>
                            </div>
                            <div className="middle">
                                <h1>Clouds</h1>
                                <p>pune,IN</p>
                            </div>
                            <div className="right">
                                <h1>{new Date().toLocaleDateString()}</h1>
                                <p>{new Date().toLocaleTimeString()}</p>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="first smBox">
                                <div className="icon">@</div>
                                <div className="content">
                                    <p>19:13 PM</p>
                                    <p>Sunset</p>
                                </div>
                            </div>
                            <div className="second smBox">
                                <div className="icon">@</div>
                                <div className="content">
                                    <p>82</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="third smBox">
                                <div className="icon">@</div>
                                <div className="content">
                                    <p>1004 MM</p>
                                    <p>Pressure</p>
                                </div>
                            </div>
                            <div className="fourth smBox">
                                <div className="icon">@</div>
                                <div className="content">
                                    <p>4.79</p>
                                    <p>Wind</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;
export const getStaticProps = async () => {
    const res = await fetch("api.openweathermap.org/data/2.5/weather?q=kolkata&appid=37a5daa95bc7084635e04654911452c8")
    const data = await res.json()
    return {
        props:{
            weather:data,
        }
    }
}