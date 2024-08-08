import {useState} from "react";

import memesData from "../memesData";

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
    const [allMemeImages, setAllMemeImages] = useState(memesData);
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
        const memesArray = allMemeImages.data.memes;
        const i = randomInt(memesArray.length);
        setMeme(oldMeme => {
            return {
                ...oldMeme,
                randomImage: memesArray[i].url
            }
        });
    }
    console.log(meme);

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