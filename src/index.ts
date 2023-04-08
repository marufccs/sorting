import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -3, 9]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection);
