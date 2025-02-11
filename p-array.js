let array = [20, 40, 30, 50, 12, 42, 322, 44];
console.log("array 1: ", array[1]);

// for loop for the array
for(let i = 0; i< array.length; i++){
    // console.log("index: ", i);
    // console.log(array[i]);
}

// using while loop in array
let y = 0;
while(y < array.length){
    if(y > 3){
        console.log("Break now");
        break;

    }
    console.log(y, " : ", array[y]);
    
    y++;
}