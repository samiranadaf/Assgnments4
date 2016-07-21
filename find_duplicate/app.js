
function findDuplicate(arr){
//var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.slice().sort(); 
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] === sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
    
}
console.log( results);
}
findDuplicate([9, 9, 1, 2, 3, 4, 4, 5, 7]);