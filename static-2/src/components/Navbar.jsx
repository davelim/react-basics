import logo from "../assets/react.svg";


export default function Navbar(props) {
    return (
        <header>
            <nav className={props.darkMode ? "dark":""}>
                <img src={logo} className="nav--icon"/>
                <h3 className="nav--logo_text">ReactFacts</h3>
                <div
                    className="toggler"
                >
                    <p className="toggler--light">Light</p>
                    <div
                        className="toggler--slider"
                        onClick={props.toggleDarkMode}
                    >
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </nav>
        </header>
    )
}