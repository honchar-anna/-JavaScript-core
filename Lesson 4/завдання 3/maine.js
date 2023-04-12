
function getLength(arr) {
   return arr.map (elem => elem.length)
}
let arr1 = getLength(['Ivan', 'Pavlo', 'Ira'])
console.log(arr1);

let arr2 = getLength(['Oleksiy','Andriana'])
console.log(arr2);