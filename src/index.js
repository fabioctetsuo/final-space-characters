import uniqueRandomArray from 'unique-random-array';
import finalSpaceCharacters from './final-space-characters.json';

const getRandomItem = uniqueRandomArray(finalSpaceCharacters);

const all = finalSpaceCharacters;
const random = getRandomItem;

export { all, random };
