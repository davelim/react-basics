import {makeURL} from "../../../utils/file-utils";

import star from "../assets/star.png";

export default function Card(props) {
    const url = makeURL(`../assets/${props.coverImg}`, import.meta.url);

    let badgeText = null;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={url.href} alt="card image" className="card--photo"/>
            <div className="card--rating">
                <img src={star} alt="star icon" className="card--star" />
                <span>{props.stats.rating} </span>
                <span className="gray">({props.stats.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
    );
}