// створи масив об'єктів із рядка
import { people } from './data.js';
console.log(people);
function fooPeople(string) {
  let arrayPeople = [];
  let newString = string.slice(1, -2).split('],[');
  console.log(newString);
  arrayPeople = newString.map(peopl => [peopl]);
  let arrayKeys = arrayPeople.shift();
  arrayKeys[0] = arrayKeys[0].replace('[', '');
  arrayKeys = arrayKeys[0].split(',');
  console.log(arrayKeys);
  const arrayOfUsers = arrayPeople.map(user => {
    let obj = {};
    let newArray = user[0].split(',');
    arrayKeys.forEach((key, i) => {
      obj[key] = newArray[i];
    });
    return obj;
  });
  console.log(arrayOfUsers);
}
// console.log(fooPeople(people));
let arrayOfData = people.split('\n');
console.log(arrayOfData);

function csvToArr(stringValue) {
  // Add logic
  const [keys, ...rest] = stringValue
    .trim()
    .split('\n')
    .map(item => item.split(','));

  const formedArr = rest.map(item => {
    const object = {};
    keys.forEach((key, index) => (object[key] = item.at(index)));
    return object;
  });
  return formedArr;
}
console.log(csvToArr(people));
