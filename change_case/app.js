let str="samira NADAF";
let Upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let Lower='abcdefghijklmnopqrstuvwxyz';
let result=[];
for(let i=0;i<str.length;i++)
{
    if(Upper.indexOf(str[i])!== -1)
    {
        result.push(str[i].toLowerCase());
    }
    else if(Lower.indexOf(str[i]!== -1))
    {
        result.push(str[i].toUpperCase());
    }
}
console.log(result.join(''));