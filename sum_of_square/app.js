function sumOfSquare(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+Math.pow(arr[i],2);
    
    }
    return sum;
}
console.log(sumOfSquare([1,2,3,4]));