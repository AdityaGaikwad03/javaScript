// for loop 

for (let i = 0; i <= 10; i++) 
    {
    console.log(`outer loop ${i}`);

   for (let j = 0; j <= 10; j++) 
    {
    // console.log(`inner loop ${j}`);
    console.log(i + '*' + j + '=' + i*j);
   }
}

let myArray = ["flash", "batman", "superman"]
for (let k = 0; k < myArray.length; k++) {
    const element = myArray[k];
    console.log(element)
}

// break and continue

for (let l = 0; l < 20; l++) {
    if  (l == 5){
        console.log("detected 5");
        break
    }
   console.log(`value of l is ${l}`);
    
}

for (let l = 0; l < 20; l++) {
    if  (l == 5){
        console.log("detected 5");
        continue
    }
   console.log(`value of l is ${l}`);
    
}