function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let temp;
            if (arr[j - 1] > arr[j]) {
                temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }

    }
    return arr;
}
console.log(sort([5, 4, 6, 3, 8, 2, 9, 1]));