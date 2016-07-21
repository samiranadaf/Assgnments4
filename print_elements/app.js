function printElements(arr) {
    for (var i in arr) {
        console.log("row " + i);
        for (var j in arr[i]) {
            console.log(" " + arr[i][j]);
        }
    }
}
printElements([[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [5, 6, 7, 8]]);