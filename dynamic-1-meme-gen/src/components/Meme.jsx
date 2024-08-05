export default function Meme() {
    return (
        <div className="input">
            <div className="text">
                <label className="textbox">
                    Top text
                    <input
                        name="topText"
                        placeholder="Shut up" />
                </label>
                <label className="textbox">
                    Bottom text
                    <input
                        name="bottomText"
                        placeholder="And take my money" />
                </label>
            </div>
            <br/>
            <button type="submit">
                Get a new meme image
                <i className="fa-solid fa-image"></i>
            </button>
        </div>
    );
}