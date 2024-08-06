import {useState} from "react";

import memesData from "../memesData";

function randomInt(max, min=0) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
}
export default function Meme() {
    const [memeImage, setMemeImage] = useState(memesData.data.memes[0].url);
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const i = randomInt(memesArray.length);
        setMemeImage(memesArray[i].url)
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
            <img src={memeImage} className="meme--image"/>
        </main>
    );
}