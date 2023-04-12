function arrCopy(arr){
  let newArr = [];
  return newArr = arr.slice();
}
const arr1 = arrCopy([1,2,3]);
console.log(arr1);

const arr2 = arrCopy([1, 2, 3, [10, 20]]);
console.log(arr2);