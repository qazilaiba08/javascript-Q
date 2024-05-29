// 1.Declare an empty array using JS literal notation to store
// student names in future.
// Declare and initialize a strings array.
// 2. Declare and initialize a numbers array.
// 3. Declare and initialize a boolean array.
// 4. Declare and initialize a mixed array.5. Declare and Initialize an array and store available
// 5 education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:
    
//     6. Write a program to store 3 student names in an array.Take
//     another array to store score of these three students.
//     Assume that total marks are 500 for each student, display
//     the scores & percentages of students 

let students = [];
console.log(students);

let string = ["Pakistan",'Suadia arbai','Dubai','London'];
console.log(string);

let integer = [1,2,3,4,6,5,7];
console.log(integer);

let boolen = [true,false];
console.log(boolen);

let mixedArry = ["pop",34,true];
console.log(mixedArry);

//Q 5
let Qulifacation = ["SSC",'BSC',"PHD",'M.PHILL',"MS","B.COM",'HSC'];
console.log(Qulifacation);
document.write("Qulifaction :","<br>",Qulifacation);

//Q 6
let studentName = ["Michel","Jhon","Tony"];
let studentScore = [320,230,480];
let total = 500;
let precentege =(studentScore[0] / total)*100;
let precentege1 =(studentScore[1] / total)*100;
let precentege2 =(studentScore[2] / total)*100;
document.write("<br>","Score of "+ studentName[0]+" is "+studentScore[0]+".  Precentege is "+precentege+" %");
document.write("<br>","Score of "+ studentName[1]+" is "+studentScore[1]+".  Precentege is "+precentege1+" %");
document.write("<br>","Score of "+ studentName[2]+" is "+studentScore[2]+".  Precentege is "+precentege2+" %");