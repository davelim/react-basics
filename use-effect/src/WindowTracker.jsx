import {useState, useEffect} from "react";

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function watchWidth() {
            console.log("Set width");
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", watchWidth);

        /* Best practice: function passed into useEffect returns a function
           that cleans up side affects it created. In this case:
           window.removeEventListener() is the clean up function of
           widow.addEventListener().
        */
        return () => {
            console.log("Clean up");
            window.removeEventListener("resize", watchWidth);
        }
    }, []);

    return (
        <h1>Window width: {windowWidth}</h1>
    );
}