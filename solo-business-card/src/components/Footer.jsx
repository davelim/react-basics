import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook-icon.jpg";
import instagram from "../assets/instagram-icon.png";
import github from "../assets/github.png";

export default function Footer() {
    return (
        <div className="footer--div">
            <a href="/"><img src={twitter} alt="twitter-logo" /></a>&nbsp;
            <a href="/"><img src={facebook} alt="facebook-logo"/></a>&nbsp;
            <a href="/"><img src={instagram} alt="instagram-logo"/></a>&nbsp;
            <a href="https://github.com/davelim" target="_blank"><img src={github} alt="github-logo" /></a>
        </div>
    );
}