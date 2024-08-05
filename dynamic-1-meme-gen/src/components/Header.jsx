import troll from "../assets/troll.png";

export default function Header() {
    return (
        <header>
            <div className="header--logo">
                <img src={troll} />
                <span>Meme Generator</span>
            </div>
            <span>React Course - Project 3</span>
        </header>
    )
}