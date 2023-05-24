//print 1 to 10 using while 
var i = 1;
while (i <= 10) {
 console.log(i);
 i++;
}

// print 10 to 1 using while
var i = 10;
while (i >= 1) {
 console.log(i);
 i--;
}
// update array and print array
var arr=[1,2,3,4,5,6];
arr[0]=8;
var x=arr[0];
console.log(x);
for(var i=0;i<=arr.length;i++)
console.log(i);

// update and print array
var arra=[11,22,33,44,55,66];
arra[0]=8;
var x=arra[0];
console.log(x);
for(var i=arra.length-1;i>=0;i--)
console.log(i);
// finding even number in array and printing even numbers
var ar=[20,21,22,23,24,25,26,27,28,29,30];
for(var index=ar.length-1;index>=0;index--){
    if(ar[index]%2==0){
        console.log(ar[index]);
    }
}
// finding odd numbers in array and printing odd numbers
var ar=[20,21,22,23,24,25,26,27,28,29,30];
for(var index=0;index<=ar.length-1;index++){
    if(ar[index]%2==1){
        console.log(ar[index]);
    }
}

//sum of numbers while loop
var i=1;
var sum=0;
while(i<=10){
   
    sum+=i;
    i++
}
console.log(sum);


// factorial

var j=1;
var factorial=1;
while(j<=10){
    factorial*=j;
    j++;
}
console.log(factorial);

//57 table

k=1;
l=21;
while(k<=100){
    console.log(l + '*' + k + '=' + (l*k));
    k++;
}
