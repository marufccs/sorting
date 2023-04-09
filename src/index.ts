import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollections } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -3, 9]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection);
const charactersCollection = new CharactersCollections("sakdfsl");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection);
