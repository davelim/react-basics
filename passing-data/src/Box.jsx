import {useState} from "react";

export default function Box(props) {
    const [localOn, setLocalOn] = useState(props.on);

    const styles = {
      backgroundColor: localOn ? "#222222" : "transparent"
    }

    function toggleLocalOn() {
        setLocalOn(s => !s);
    }

    return (
        <div className="box" style={styles} onClick={toggleLocalOn}>
        </div>
    );
}