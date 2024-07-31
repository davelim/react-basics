const nums = [1, 2, 3, 4, 5]; // --> square numbers, i.e. [1, 4, 9, 16, 25]
const squared = nums.map(n => n**2);
console.log(`${nums}\n -> ${squared}`);

const names = ["alice", "bob", "charlie", "daniel"]; // --> capitalize first letter
const title = (word) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}
const titleNames = names.map(n => title(n));
console.log(`${names}\n -> ${titleNames}`);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]; // --> return html <p></p> tags
const elements = pokemon.map(p => `<p>${p}</p>`);
console.log(`${pokemon}\n -> ${elements}`);