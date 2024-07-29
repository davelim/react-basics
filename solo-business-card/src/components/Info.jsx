import photo from "../assets/glasses-dude.jpg";

const emailButtonStyle = {
    backgroundColor: "white",
}
const linkedInButtonStyle = {
    // https://encycolorpedia.com/0072b1#google_vignette
    backgroundColor: "#1688c7",
    color: "white",
}
const linkedInIconStyle = {
    color: "#1688c7",
    backgroundColor: "white",
    padding: "3px",
    borderRadius: "2px",
}
export default function Info() {
    return (
        <div className="info">
            <img src={photo} className="info--photo"/>
            <h2 className="info--name">John Smith</h2>
            <span className="info--job">Frontend Developer</span><br></br>
            <span className="info--website">johnsmith.website</span>
            <div className="info--contact">
                <button style={emailButtonStyle}>
                    <i className="fa fa-envelope"/>&nbsp;
                    Email
                </button>
                <button style={linkedInButtonStyle}>
                    <i className="fa fa-linkedin" style={linkedInIconStyle}/>&nbsp;
                    LinkedIn
                </button>
            </div>
        </div>
    );
}