var arr=[3,2,4,5];
3**1,2**2,4**3,5**4
var res;
var count=1;

for(let  i of arr){
    res=i**count;
    count+=1;
    console.log(res);
}
let arr=[3,4,5] //[10,9,7]
var total=0;
for(let num of arr){
    total+=num;

}
console.log(total)
var res=[]
for(let num of arr){
    let iteam=total-num;
    res.push(iteam)
}
console.log(res)


