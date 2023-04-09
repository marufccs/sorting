import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollections } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -3, 9]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollections("sakdfsl");
charactersCollection.sort();
console.log(charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(300);
// linkedList.add(500);
// linkedList.add(-50);

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
