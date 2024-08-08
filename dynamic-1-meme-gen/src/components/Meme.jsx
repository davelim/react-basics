import {useState, useEffect} from "react";

function randomInt(max, min=0) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
}
export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "ONE DOES NOT SIMPLY",
        bottomText: "WALK INTO MORDOR",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(resp => resp.json())
            .then(data => setAllMemes(data.data.memes));
    }, []);

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function getMemeImage() {
        const i = randomInt(allMemes.length);
        setMeme(oldMeme => {
            return {
                ...oldMeme,
                randomImage: allMemes[i].url
            }
        });
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Shut up"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="And take my money"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} />
                <button
                    type="submit"
                    className="form--button"
                    onClick={getMemeImage} >
                    Get a new meme image
                    <i className="fa-solid fa-image"></i>
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}