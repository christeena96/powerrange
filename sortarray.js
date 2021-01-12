//var arr=[8,6,2,2,7,3]
//sorting
//arr.sort((no1,no2)=>no1-no2)
//console.log(arr)
//sorting
var arr=[7,9,5,7,8,3,1]
for(let i  =0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;


            
        }
    }


}
console.log(arr)















    
