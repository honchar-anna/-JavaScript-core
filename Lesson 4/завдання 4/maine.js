function removeDuplicates(arr) {
   let newArr = [];
   for (let i=0; i<arr.length; i++){
       if(!newArr.includes(arr[i])){
           newArr.push(arr[i]);
       }
   }
   return newArr;
}
let arr1 = removeDuplicates(['html', 'css', 'html', 'js']);
console.log(arr1)

let arr2 = removeDuplicates(['html', 'css', 'html', 'js', 'python', 'js', 'scss'])
console.log(arr2);
