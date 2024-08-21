export default function Die(props) {
    return(
        <div className={`die ${props.hold ? "held-die": ""}`}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}