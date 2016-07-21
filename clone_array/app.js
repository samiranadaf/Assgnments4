function arrayClone(arr)
{
    return arr.slice(0);
}
console.log(arrayClone([1,4,3,2]));
console.log(arrayClone([1,2,[4,5]]));