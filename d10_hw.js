/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

console.log("\n----------EXERCISE A----------\n")
let exA_string = "myString";

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/
console.log("\n----------EXERCISE B----------\n")
let exB_sum = 11+12+13+14+15+16+17+18+19;

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/
console.log("\n----------EXERCISE C----------\n")
let exC_random = Math.floor(Math.random()*21);

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/
console.log("\n----------EXERCISE D----------\n")
let exD_me = {
    name : "Batı",
    surname : "Gökovalı",
    age : 25,
}

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/
console.log("\n----------EXERCISE E----------\n")
delete exD_me.age;

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/
console.log("\n----------EXERCISE F----------\n")
exD_me.skills = ["HTML", "CSS", "JavaScript"];

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/
console.log("\n----------EXERCISE G----------\n")
exD_me.skills.pop();
console.log(exD_me.skills);

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/
console.log("\n----------EXERCISE 1----------\n")
let ex1_randomize = Math.floor(Math.random()*7)+1;

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/
console.log("\n----------EXERCISE 2----------\n")

function ex2_whoIsBigger(a,b) {
    if (a>b) {
        console.log("a is bigger than b!")
        let result = a;
        return a;
    } else {
        console.log("b is bigger than a!")
        let result = b;
        return b;
        
    }
}
let ex2 = ex2_whoIsBigger(3,1)
console.log(ex2);


/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/
console.log("\n----------EXERCISE 3----------\n")
function ex3_splitMe (ex3string) {
    return ex3string.length > 0 ? ex3string.split(' ') : [];
}

let ex3 = ex3_splitMe;
console.log(ex3("Bilbo Baggins"))

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/
console.log("\n----------EXERCISE 4---------\n")
function ex4_deleteOne(a,b) {
    if (b === true) {
        console.log(a.slice(1));
    } else
    {
        console.log(a.slice(0, -1));
    }
}

let ex4 = ex4_deleteOne;
console.log(ex4("Testing", true));

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/
console.log("\n----------EXERCISE 5---------\n");
function ex5_onlyLetters (ex5_string) {
    return ex5_string.replace(/[0-9]/g, '')
}

let ex5 = ex5_onlyLetters;
console.log(ex5("Testing 5150 the 5150 code. 5150"))

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/
console.log("\n----------EXERCISE 6---------\n");


function ex6_isThisAnEmail(ex6_email) {
    if (
        ex6_email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ) 
    {
        console.log("Valid e-mail adress!")
    } 
    else {
        console.log("Invalid e-mail adress!")
    }
} 

let ex6 = ex6_isThisAnEmail;
console.log(ex6("batigokovali@icloud.com"));

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/
console.log("\n----------EXERCISE 7---------\n");

function ex7_whatDayIsIt ()
{
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",    
    ];
    let today = new Date();
    let currentDayOfTheWeek = days[today.getDay()];
    console.log(currentDayOfTheWeek);
}

console.log(ex7_whatDayIsIt());

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/
console.log("\n----------EXERCISE 8---------\n");

function rollTheDices (roll)
{
    let sum = 0;
    let rollArray = [];
    for (let i = 0; i < roll; i++)
    {
        rollArray.push(Math.floor(Math.random()*6)+1)
        sum += rollArray[i];
    }
    console.log("Values: ", rollArray);          
    return sum;
}

let ex8 = rollTheDices;
console.log("Sum: ", ex8(5));


/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/
console.log("\n----------EXERCISE 9---------\n");

function howManyDays(date)
{
    let current = new Date(date.getTime());
    let previous = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((current-previous+1)/86400000);
}

console.log(howManyDays(new Date(2022, 12, 01)));

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/
console.log("\n----------EXERCISE 10---------\n");

function isTodayIsMyBirthday () 
{
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate()
    let isMyBirthday = month === 10 && day === 2 ? true : false;

    if (
        isMyBirthday
    )
    {
        console.log("It's YOUR birthday.")
    } else
    {
        console.log("It's not YOUR birthday.")
    }
}

let ex10 = isTodayIsMyBirthday;
ex10();


// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

const movies = [

    {

    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

    ];

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/
console.log("\n----------EXERCISE 11---------\n");

let gonnaBeDeleted = {
    param1 : "Test1",
    param2 : "Test2",
}

function deleteProp (object,string) 
{
    delete object[string];
    console.log(object);
}   

deleteProp(gonnaBeDeleted, "param2");


/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/
console.log("\n----------EXERCISE 12---------\n");

function oldestMovie (array) {
 let oldestMovieIs = 2023;

 for (let i=0; i< array.length; i++)
 {
    if (
        array[i].Year < oldestMovieIs
    )
    {
        oldestMovieIs = array[i].Year;
        oldestMovie = array[i];
    }
        
 }
 console.log(oldestMovie);
}
oldestMovie(movies);

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/
console.log("\n----------EXERCISE 13---------\n");

function countMovies (array) {
    console.log(array.length);
}

countMovies(movies);


/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/
console.log("\n----------EXERCISE 14---------\n");

function onlyTheTitles (array) 
{
    let titles = [];
        for (i = 0; i< array.length; i++)
        {
            titles.push(array[i].Title);
        }
    console.log(titles);
}

onlyTheTitles(movies);

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/
console.log("\n----------EXERCISE 15---------\n");

function onlyInThisMillennium (array)
{
    let thisMillenium = [];
    for (i = 0; i < array.length; i++)
    {
        if (
            array[i].Year > 1999
        )
        thisMillenium.push(array[i].Title)
    }
    console.log(thisMillenium);
}

onlyInThisMillennium(movies);

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/
console.log("\n----------EXERCISE 16---------\n");

function getMovieById (id)
{
    for (i = 0; i < movies.length; i++)
    {
        if (
            movies[i].imdbID === id
        )
        console.log(movies[i])
    }

}

getMovieById("tt0167260");

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/
console.log("\n----------EXERCISE 17---------\n");

function sumAllTheYears (array)
{
    let summedYears = 0;
    for (i = 0; i< array.length; i++)
    {
        summedYears += parseInt(array[i].Year)
    }
    console.log(summedYears)
}

sumAllTheYears(movies);


/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/
console.log("\n----------EXERCISE 18---------\n");

function searchByTitle(string)
{
    let searchedTitles = [];
    for ( i = 0; i < movies.length; i++)
    {
        if (
            movies[i].Title.includes(string)
        )
        searchedTitles.push(movies[i].Title);
    }
    console.log(searchedTitles)
}

searchByTitle("Lord");

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/
console.log("\n----------EXERCISE 19---------\n");

function searchAndDivide (string)
{
    let match = [];
    let unmatch = [];
    for ( i = 0; i < movies.length; i++)
    {
        if (
            movies[i].Title.includes(string)
        )
        match.push(movies[i]);
     else 
    {
        unmatch.push(movies[i]);
    }
}
console.log("Matched Results: ", match)
console.log("Unmatched Results: ", unmatch)
}

searchAndDivide("Lord")

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/
console.log("\n----------EXERCISE 20---------\n");

function removeIndex (number)
{
    movies.splice(number, 1)
    console.log(movies)
}

removeIndex(0);


// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***
*/

console.log("\n----------EXERCISE 21---------\n");

function halfTree (number)
{
    let leafs = "";
    for (i = 0; i< number; i++)
    {
        for (j = 0; j<=i;j++)
        {
            leafs += "*";
        }
        leafs += "\n";
    }
    console.log(leafs);
}

halfTree(2)
/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****
*/
console.log("\n----------EXERCISE 22---------\n");

function tree (number)
{
    let leafs = "";
    for (i = 0; i< number; i++)
    {
        for (j = 0; j<=i; j=(2*j)-1)
        {
            leafs += "*";
        }
        leafs += "\n";
    }
    console.log(leafs);
}

tree(5)

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */
