import { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [seconds, setSecond] = useState(0);
 
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("executed")
            setSecond(prevSeconds => prevSeconds + 1);
        }, 1000)
        return () => {
            console.log("time to stop")
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div>
            <h1>second : {seconds}</h1>
        </div>
    )
}

export default TimerComponent