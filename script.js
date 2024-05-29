// //Class activity questions

// // Q1 
// var age = +prompt("enter your age")
// if(age < 18){
//     console.log("you are eligible for voting");
// }
// else{
//     console.log("you are eligible for voting");
// }


// // Q2
// let temp = +prompt("input the temperature")
// if(temp > 25 ){
//     console.log("Its a hot day");
// }
// else{
//     console.log("its a normal day");
// }


// // Q3
// let score = +prompt("Enter the students score");
// if(score >= 60){
//     console.log("you passed the exam");
// }
// else{
//     console.log("you failed the exam");
// }


// // Q4
// let raining = true; 
// if(raining = true){
//     console.log("remember to bring an umberalla");
// }
// else {
//     console.log("enjoy the sunny weather");
// }

// // Q5
// var age = +prompt("Enter your age")
// if(age  >= 18){
//     console.log("you are an adult");
// }
// else{
//     console.log("you are minor");
// }


// Q6
// let number = +prompt("enter the number")
// if(number > 0){
//     console.log("the number is positive");
// }
// else if(number < 0){
//     console.log("the number is negative");
// }
// else if(number==0){
//     console.log("the number is zero");
// }
// else{
//     console.log("the number is integer");
// }

// logical and  operators (if the two statement true than log nh chlyga)
// let scores = +prompt("enter your score") 
// // 80 s bri value or 40 s choti
// if( scores >= 80 && scores >= 60 ){
//     console.log("you are passed");
// }
// else{
//     console.log("you are failed");
// }

// or ||(one statement is true than also run the code)
// if( scores >= 80 ||  scores >= 60 ){
//     console.log("you are passed");
// }
// else{
//     console.log("you are failed");
// }

// logicat not ..staetmemt true horh h tou false kryga or false hoga tou true krdyga    !
// let israining =false;
//  if (!israining) {
//     console.log("its not raining.enjoy the day ");
//  }
//  else{
//     console.log("dont forget the umberalla");
// }


// let weight = +prompt("enter weight")
// let time = +prompt ("enter time")
// let age = +prompt("enter your age")
// let gender = +prompt("enter your gender")
// if (weight > 300 || time < 6) {
//     alert("come to try out")
// }
// else{
//     alert("come to our cook out")
// }

// if (weight > 300 || time < 6 || age > 17 || gender === "male"){
// alert("come to our try out")
// }
// else{
//     alert("come to our cook out")
// }


// let weight = +prompt("enter weight")
// let time = +prompt ("enter time")
// if (!(weight > 300 && time < 6)){
//     alert ("come to our tryout")
// }
// else {
//     alert("come to our cook out")
// }


// chp 14

// let x = 4;
// let y = 4;
// let x = 4;
// let x = 4;
// let x = 4;
// let x = 4;
// let x = 4;
// let x = 4;
// let x = 4;
// let x = 4;
// let x = 4;
// let x = 4;
// let x = 4;


// nested

// let x = 10;
// let y = 1;

// if (x > 5) {
//     if (y > 2) {
//         console.log("Both x and y are greater than their respective thresholds.");
//     } else {
//         console.log("x is greater than 5, but y is not greater than 2.");
//     }
// } else {
//     console.log("x is not greater than 5, so the inner condition is not checked.");
// }



// let temperature = 15;
// let isSunny = true;

// if(temperature > 25){
//   console.log("It's hot outside!");

//   if(isSunny){
//       console.log("Don't forget to wear sunscreen.");
//   }
//   else{
//     console.log("You might still want to wear sunscreen.");
//   }
// }
// else if(temperature >= 15 && temperature <= 25){
//     console.log("It's a pleasant day.");
//   if(isSunny){
//     console.log("Enjoy the sunshine!");
//   }
//   else{
//     console.log("Even if it's cloudy, it's still nice outside.");
// }
// }
// else{
//     console.log("It's a bit chilly.");
//     if (isSunny) {
//         console.log("Don't be fooled by the sun, it's still cool.");
//     } else {
//         console.log("It might be cloudy, so bring a jacket just in case.");
//     }
// }

// let age = 18
// let weight = 78
// if(age > 20){
//     if(weight > 45){
//         console.log("you are in range");
//     }
//     else{
//         console.log("you are out of range");
//     }
// }
// // else {
// //     if(weight > 45){
// //         console.log("have a good weight");
// //     }
// // }

//Q # 1
// let city = prompt("Enter the city");

// if (city === "karachi") {
//     alert(" welcome  to city of lights");
// }
// else{
//     alert("not welcome");

// }

// let gender = prompt("Enter you gender");

// if (gender === "male") {
//     alert("Good morning sir");
// }
// else if(gender === "female"){
//     alert("Good morning Mama");
// }
// else{
//     alert("not valid");
// }

// let roadtraffic = prompt("Input color of road traffic signal");

// if(roadtraffic === "red"){
//     alert("must stop");
// }
// else if(roadtraffic === "yellow"){
//     alert("ready to move");
// }
// else if(roadtraffic === "green"){
//     alert("move now");
// }
// else{
//     alert("not requried")
// }

//Chap 15


// array with string
let cities = ["atlanta","baltimore","chicago","denver","los angels", "seattle"];
// console.log(cities[0].length);
// console.log(cities[1].length);

//array with number
let number = [1,2,3,4,5,6,7,8,9];
console.log(number[0].length);//undefinded

//array with num & string
let info = ["laiba",22 ,"kainat",20,"anousha",20];
console.log(info[0].length);

// array with num , string & boolen
let mixedArry =[1,"bob","now is",true];
console.log(mixedArry);

//arrays methods
//push()
//pop()

//push means kuch add krwana ho 

//pop means remove krta ha

// let Cities = ["atlanta","baltimore","chicago","denver","los angels", "seattle"];
// Cities.push("pakistan","india");
// Cities.pop("india");
// console.log(Cities);

//to string array convert ho jagae string ma
let Cities = ["atlanta","baltimore","chicago","denver","los angels", "seattle",1];

console.log(Cities);
console.log(Cities.toString());
 
// concat symbol bagar add krwata ha
let myGirls = ["laiba","kainat"];
let myBoys = ["rafay","saad","kaif"];
let myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//unshift first ma add krwata ha 
let fruits = ['banana','mango','apple','orange','peach'];
fruits.unshift("lemon",45);
console.log(fruits);

//shift huma first sa delete kra ta ha

let animals = ['lion','monkey', 'snake','horse','cat','dog'];
console.log(animals);
animals.shift();
console.log(animals);

//slice one pices value ka liy use hota ha

let Fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let piece_OF_array = Fruits.slice(1,-3)
// empty value because of positive value bari ha negative choti hoti ha
console.log(piece_OF_array); 

//splice add bhi krwata ha remove bhi hota or replace bhi krwata ha

// let month = ["january", "februry", "monday", "tuesday",'saturday'];
// let days = month.splice(2,0,'friday');
// console.log(days);
// console.log(month);

// Qs. Create an array to store companies-> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”

// Remove the first company from the array

// Remove Uber & Add Ola in its place

// Add Amazon at the end

let companies = ['bloombreg','microsoft','uber',"google",'IBM','netflix'];

companies.shift();
console.log(companies);

let Companies =['bloombreg','microsoft','uber',"google",'IBM','netflix'];
Companies.splice(2,2,'ola');
console.log(Companies);

let company =['bloombreg','microsoft','uber',"google",'IBM','netflix'];
company.push('Amazon');
console.log(company);

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// if (cityToCheck === cleanestCities[0]) {     alert("It's one of the cleanest cities");  }  else if (cityToCheck === cleanestCities[1]) { 
//       alert("It's one of the cleanest cities");  } 
//        else if (cityToCheck === cleanestCities[2]) {  
//           alert("It's one of the cleanest cities");  } 
//           else if (cityToCheck === cleanestCities[3]) { 
//               alert("It's one of the cleanest cities");  } 
//               else if (cityToCheck === cleanestCities[4]) { 
//                   alert("It's one of the cleanest cities");  } 
//                    else {
//        alert("It's not on the list");  }


// FOR LOOP;

for(let i = 0;i < 10 ; i++){
    console.log("hello world");
}
