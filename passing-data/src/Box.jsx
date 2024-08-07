export default function Box(props) {
    const styles = {
      backgroundColor: props.on ? "#222222" : "none"
    }
    console.log(props.on, styles.backgroundColor);
    return (
        <div className="box" style={styles}>
        </div>
    );
}