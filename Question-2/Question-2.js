const arr = [10,290,281,32,1,0,817];
let intArray = arr.map(Number); // convert into number
intArray = [...new Set(intArray)]; // Remove duplicate numbers
const secondLargest = intArray.sort((a,b) => {
   return b - a;
})[1];
console.log(secondLargest) // WILL RETURN 290