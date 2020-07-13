// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

//create a function that takes in a num
const divBy3 = (num) => {
    //create a variable and use modulo operator to define the result of num being divisible by 3
    let moduloNum = num % 3
    //if num is divisible by 3, return string "is divisible by three"
    if (moduloNum === 0){
        return `${num} is divisible by three`
        //else return string "is not divisible by three"
    } else 
        return `${num} is not divisible by three`
}

// console.log(divBy3(num1));
// console.log(divBy3(num2));
// console.log(divBy3(num3));







// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// var randomNouns = ["streetlamp", "potato"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]


//create a function that takes in an array
const capWords = (array) => {
    //create a new variable and use map to go through each of the words in the array
    let eachWord = array.map(value => {
        //return the value of the first letter of each word, change it to upper case, and then add all the letters after index 1
        return value.charAt(0).toUpperCase() + value.substring(1)
    })
    //return the new variable to get an array of all the capitalized words
    return eachWord
}

// console.log(capWords(randomNouns));





// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

//declare a function that takes in an array
const onlyNumbers = (array) =>{
    //create a new variable and use map to get every value that is a number using typeof
    let getValues = array.map ((value) =>{
        //if it is a number, return the number
        if(typeof value === "number"){
            return value
        }
    })
    //sort the numbers from least to greatest
    let numSort = getValues.sort((a, b) => a - b)
    //filter out the undefined values
    let noUndefined = numSort.filter(value => value !== undefined)
    //return array with just numbers, from least to greatest
    return noUndefined
}


// console.log(onlyNumbers(mixedDataArray ));


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

//declare a function that takes in a string
const firstVowelIndex = (string) => {
    //create a new variable, split the string into an array, and use map to get the indexes of where the vowels are in the word.
    let getIndex = string.split("").map((value, index) => {
        if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u"){
            //return the indexes
            return index
        }
    })
    //filter out the undefined values
    let noUndefined = getIndex.filter(value => value !== undefined)
    //return the first index of the array of indexes, which is the index of the first vowel
    return noUndefined[0]
}

// console.log(firstVowelIndex(vowelTester1));
// console.log(firstVowelIndex(vowelTester2));



// --------------------5) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [  
    {name: "Itchy", animal: "mouse"}, 
    {name: "Stimpy", animal: "cat"}, 
    {name: "Daffy", animal: "duck"}, 
    {name: "Scratchy", animal: "cat"}, 
    {name: "Ren", animal: "dog"}, 
    {name: "Felix", animal: "cat"}]

//create a function that takes in an array
const getCats = (array) => {
    //create a new variable that filters out any animal that is a cat
    var animalCat = array.filter(value => 
        value.animal === "cat")
    //return the names and animal types of just cats
    return animalCat
}

  

// console.log(getCats(toonimals));



// --------------------6) Using the toonimals variable, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

//create a function that takes in an array
const onlyNonCatNames = (array) => {
    //create a variable that uses filter to return any animal that is not a cat
    var noCats = array.filter(value => value.animal !== "cat")
    //use map to go through the previous array created (noCats) and only return the names of the non-cats.
    return noCats.map(value => {
        return value.name
    })
    }



// console.log(onlyNonCatNames(toonimals));
