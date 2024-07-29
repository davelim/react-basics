import photo from "../assets/glasses-dude.jpg";


export default function Info() {
    return (
        <div >
            <img src={photo} className="info--photo"/>
            <h2>John Smith</h2>
            <h4>Frontend Developer</h4>
            <span>johnsmith.website</span>
            <div>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    );
}