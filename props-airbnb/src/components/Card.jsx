import photo from "../assets/katie.png";
import star from "../assets/star.png";

export default function Card() {
    return (
        <div className="card">
            <img src={photo} alt="card image" className="card--photo"/>
            <img src={star} alt="star icon" className="card--star" />
            <span><span>5.0 </span><span className="card--lighter">(6) . USA</span></span>
            <span className="card--title">Life lessons with Katie Zaferes</span>
            <span><span className="card--price">From $136</span><span> / person</span></span>
        </div>
    );
}