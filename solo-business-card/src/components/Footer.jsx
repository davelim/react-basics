import twitter from "../assets/twitter.png";
import github from "../assets/github.png";

export default function Footer() {
    return (
        <div className="footer--div">
            <a href="/"><img src={twitter} alt="twitter-logo" /></a>&nbsp;
            <a>todo: facebook icon</a>&nbsp;
            <a>todo: instagram icon</a>&nbsp;
            <a href="https://github.com/davelim" target="_blank"><img src={github} alt="github-logo" /></a>
        </div>
    );
}