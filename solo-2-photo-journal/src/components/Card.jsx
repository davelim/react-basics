export default function Card(props) {
    return (
        <div className="card">
            <img src={props.details.imageUrl}/>
            <div className="card--details">
                <div className="card--location">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{props.details.location.toUpperCase()}</span>
                    <a href={props.details.googleMapsUrl}>View on Google Maps</a>
                </div>
                <span className="card--title">{props.details.title}</span>
                <span className="card--date">{props.details.startDate} - {props.details.endDate}</span>
                <span className="card--description">{props.details.description}</span>
            </div>
        </div>
    );
}