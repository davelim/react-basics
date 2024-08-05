import troll from "../assets/troll.png";

export default function Header() {
    return (
        <header>
            <img src={troll} />
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </header>
    );
}