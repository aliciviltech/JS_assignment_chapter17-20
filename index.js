// Q1. Declare and initialize an empty multidimensional array.(Array of arrays)
let multiArray = [[],[],[]];
console.log(multiArray)


// Q2. Declare and initialize a multidimensional array representing the following matrix:
let multiArray2 = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
for(let arr of multiArray2){
    console.log(arr.join(' '));
}


// Q3. Write a program to print numeric counting from 1 to 10.
for(let i = 1; i<=10; i++){
    console.log(i);
}


// Q4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
let tableNumber = prompt('Enter Table Number: ');
let tableLength = prompt('Enter table length: ');
for(let i=1; i<=tableLength; i++){
    console.log(`${tableNumber} x ${i} = ${tableNumber*i}`);
}



//  Q5. Write a program to print items of the following array using for loop: fruits = ["apple”, banana”, “mango”, “orange”,“strawberry”]
let fruits = ["apple", "banana", "mango", "orange","strawberry"];
for (let i = 0; i<fruits.length; i++){
    console.log(`Element at index ${i} is ${fruits[i]}.`);
}



// Q6.Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
let count = 0;
for(let i=1; i<=15; i++){
    if(i===15){
        count = count + i ;
    } else{
        count = count + i +',';
    }
}
document.write('<b>counting</b> = ',count);

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
let reverseCount = 0;
for(let i=10; i>0; i--){
    if(i===1){
        reverseCount = reverseCount + i ;
    } else{
        reverseCount = reverseCount + i +',' ;
    }
}
document.write('<br><b>reverse counting</b> = ', reverseCount);

// c.Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
let even = 0;
for(let i=0; i<=20; i++){
    if(i%2===0){
        if(i===20){
            even = even + i;
        } else{
        even = even + i + ',';
        }
    }
}
document.write('<br><b>Even:</b> ', even);

// d.Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
let odd = 0;
for(let i=0; i<=20; i++){
    if(i%2 !== 0){
        if(i===19){
            odd = odd + i;
        } else{
        odd = odd + i + ',';
        }
    }
}
document.write('<br><b>odd:</b> ', odd);

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
let series = 0;
for(let i=1; i<=20; i++){
    if(i%2===0){
        if(i===20){
            series = series + i + 'k';
        } else{
        series = series + i + 'k'+',';
        }
    }
}
document.write('<br><b>Series:</b> ', series);



// Q7. You have an array
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt('Welcome to SMIT Bakery. What do you want to order sir/ma`am? ');
if(A.includes(search)){
    console.log(`${search} is available at index ${A.indexOf(search)} in our bakery.`);
} else{
    console.log(`We are sorry. ${search} is not available at our bakery.`)
}




// Q.8. Write a program to identify the largest number in the given array.
let array3 = [24, 53, 78, 91, 12];
let max = array3[0];
for(let el of array3){
    if(el>max){
        max = el;
    }
}
console.log(`Array items: ${array3}\nLargest nummber is: ${max}`);




// Q9.Write a program to identify the smallest number.
let min = array3[0];
for(let el of array3){
    if(el<min){
        min = el;
    }
}
console.log(`Array items: ${array3}\nSmallest nummber is: ${min}`)


// Q.10. Write a program to print multiples of 5 ranging 1 to 100.
let multFive = 0;
for(let i=1; i<=100; i++){
    if(i%5===0){
        if(i===100){
            multFive = multFive + i;
        }else{
            multFive = multFive + i+", ";
        }
        
    }
}
console.log(multFive);