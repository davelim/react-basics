export default function Joke({setup, punchline}) {
    return (
        <div>
            {setup && <h3>Setup: {setup}</h3>}
            <p>{punchline}</p>
            <hr />
        </div>
    );
}