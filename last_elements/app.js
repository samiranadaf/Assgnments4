function lastArrayElements(array,elements)
{
     const len=array.length;
     return array.slice(len-elements,len);

}
console.log(lastArrayElements([1,2,3,4,5,6,7],2));