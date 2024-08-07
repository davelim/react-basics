import {useState} from "react";

export default function Joke({setup, punchline}) {
    const [isShown, setIsShown] = useState(true);

    function handleClick() {
        setIsShown(prevIsShown => !prevIsShown);
    }
    return (
        <div>
            {setup && <h3>Setup: {setup}</h3>}
            {isShown && <p>{punchline}</p>}
            <button onClick={handleClick}>{isShown?"Hide":"Show"} punchline</button>
            <hr />
        </div>
    );
}