import star from "../assets/star.png";

export default function Card({img, rating, reviewCount, country, title, price, openSpots}) {
    return (
        <div className="card">
            {openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={img} alt="card image" className="card--photo"/>
            <div className="card--rating">
                <img src={star} alt="star icon" className="card--star" />
                <span>{rating} </span>
                <span className="gray">({reviewCount}) . </span>
                <span className="gray">{country}</span>
            </div>
            <p className="card--title">{title}</p>
            <p><span className="bold">From {price}</span> / person</p>
        </div>
    );
}