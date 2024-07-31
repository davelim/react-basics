import star from "../assets/star.png";

export default function Card({img, rating, reviewCount, location, title, price, openSpots}) {
    let badgeText = null;
    if (openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={img} alt="card image" className="card--photo"/>
            <div className="card--rating">
                <img src={star} alt="star icon" className="card--star" />
                <span>{rating} </span>
                <span className="gray">({reviewCount}) . </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p><span className="bold">From {price}</span> / person</p>
        </div>
    );
}