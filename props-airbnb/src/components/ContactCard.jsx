import phone from "../assets/phone-icon.png";
import mail from "../assets/mail-icon.png";
// import {require} from "react";
import "./ContactCard.css";

export default function ContactCard({img, name, phoneNumber, email}) {
    // Note: URL needed for Vite
    // https://youtu.be/7EFZIe_Cpv8?feature=shared&t=698
    const url = new URL(`${img}`, import.meta.url);
    return (
        <div className="contact-card">
            <img src={url.href}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phone}/>
                <p>{phoneNumber}</p>
            </div>
            <div className="info-group">
                <img src={mail}/>
                <p>{email}</p>
            </div>
        </div>
    );
}