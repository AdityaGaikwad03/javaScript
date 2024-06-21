// if else conditions

var time = prompt(" what is the time ");
if(time > 5 && time < 17){
    alert("good morning");
}
else if(time > 12 && time < 17){
    alert("goog afternoon")
}
else if(time > 17 && time < 21){
    alert("good evening")
}
else {
    alert("good night")
}

// switch statments 
var fruittype = prompt("which fruittype you want")
switch(fruittype){
    case "narangi":
        console.log("60 rs/kg");
        break;
    case "mango":
        console.log("100rs/kg");
        break;
default:
    console.log(`${fruittype} soled out`)
    }
    console.log("any thing else")