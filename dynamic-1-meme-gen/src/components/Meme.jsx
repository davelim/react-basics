import memesData from "../memesData";

function randomInt(max, min=0) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
}
export default function Meme() {
    function handleClick() {
        const idx = randomInt(memesData.data.memes.length);
        console.log(`${idx}: ${memesData.data.memes[idx].url}`);
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
                    onClick={handleClick} >
                    Get a new meme image
                    <i className="fa-solid fa-image"></i>
                </button>
            </div>
        </main>
    );
}