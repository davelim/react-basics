import photo from "../assets/katie.png";
import star from "../assets/star.png";

export default function Card() {
    return (
        <div className="card">
            <img src={photo} alt="card image" className="card--photo"/>
            <div className="card--rating">
                <img src={star} alt="star icon" className="card--star" />
                <span>5.0 </span>
                <span className="gray">(6) . </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}