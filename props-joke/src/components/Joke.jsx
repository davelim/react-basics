export default function Joke({setup, punchline}) {
    return (
        <div>
            {(setup!==null && setup!=="") ? <p>{setup}</p> : ""}
            <p>{punchline}</p>
        </div>
    );
}