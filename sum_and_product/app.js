function sumAndProduct(arr){
    let sum=0;
    let product=1;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
        product=product*arr[i];
    }
    console.log("sum is:"+' '+sum+' '+"Product is:"+' '+product);
    
}
sumAndProduct([1,3,2,4,5]);