export default function Meme() {
    return (
        <main>
            <form className="form">
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
                    className="form--button ">
                    Get a new meme image
                    <i className="fa-solid fa-image"></i>
                </button>
            </form>
        </main>
    );
}