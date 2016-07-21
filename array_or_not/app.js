function arrayOrNot(array) {
   // console.log(typeof array);
    if (toString.call(array) === "[object Array]") {
        return true;
    }else {
        return false;
    }
}
console.log(arrayOrNot([1, 2, 3, 4, 5]));
console.log(arrayOrNot("samira"));
