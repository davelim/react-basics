export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark": ""}>
            <h2 className="main--title">Fun facts about React</h2>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K starts on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}