import {useState} from "react";

import memesData from "../memesData";

function randomInt(max, min=0) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
}
export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = useState(memesData);

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

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Shut up"
                    className="form--input" />
                <input
                    type="text"
                    placeholder="And take my money"
                    className="form--input" />
                <button
                    type="submit"
                    className="form--button"
                    onClick={getMemeImage} >
                    Get a new meme image
                    <i className="fa-solid fa-image"></i>
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    );
}