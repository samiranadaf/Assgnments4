function elements_of_array(array, numberOfElements) {
    if (numberOfElements < 0) {
        return [];
    }
    else if (numberOfElements === 0) {
        return array[0];
    }
    else {
        return array.slice(0, numberOfElements);
    }
}
console.log(elements_of_array([1, 2, 3, 4, 5, 6], 3));