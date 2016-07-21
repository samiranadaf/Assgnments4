
function findDuplicate(arr){
//var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
//var sorted_arr = arr.slice().sort(); 
var results = [];
for (let i = 1; i < arr.length ; i++) {
    if (arr[i - 1] === arr[i]) {
        results.pop(arr[i]);
    }
    results.push(arr[i]);
}
console.log(results.sort());
}
findDuplicate([9, 9, 1, 2,3, 4, 4, 5, 7]);