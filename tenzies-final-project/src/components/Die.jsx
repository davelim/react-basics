export default function Die(props) {
    const styles = {
        backgroundColor: props.die.isHeld ? "#59E391" : "white"
    }
    return(
        <div
            className="die"
            style={styles}
            onClick={(event) => props.handleClick(event, props.die.id)}
        >
            <h2 className="die-num">{props.die.value}</h2>

        </div>
    )
}