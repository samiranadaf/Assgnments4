function binarySearch(arr, search) {
    let first = 0;
    let last = arr.length;
    let middle = Math.floor((last + first) / 2);
    while (arr[middle] != search && first < last) {
        if (search < arr[middle]) {
            last = middle - 1;
        }
        else if (search > arr[middle]) {
            first = middle + 1;
        }
        middle = Math.floor((last + first) / 2);
    }

    return (arr[middle] != search) ? -1 : middle;
}
var arr = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(arr, 7));
console.log(binarySearch(arr, 2));    