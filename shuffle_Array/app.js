
function shuffleArray(array) {
    var len = array.length, temp, index;
    while (len > 0) {
       index = Math.floor(Math.random() * len);
        len--;
        temp = array[len];
        array[len] = array[index];
        array[index] = temp;
    }
    return array;
}
//var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); 