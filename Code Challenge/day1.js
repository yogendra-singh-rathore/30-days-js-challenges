/* Activity 1: Variable Declaration
Task 1: Declare a Variable using "var"
Task 2: Declare a Variavle using "let"
*/

var student_ID = 563463  // Number
console.log("Student ID:- ", student_ID); // Single Output
let student_Name = "Yogendra" // String
console.log("Student Name:- ", student_Name);// Single Output


/* Activity 2: Constant Declaration
Task 3: Declare a Constant using "Const"
*/

const enrollStatus = true
// Multiple Out Put Print using Table Style
console.table(["Student ID:- "+student_ID,"Student Name:- "+student_Name,"Enroll Status:- "+enrollStatus]);



/* Activity 3: Data Types
Task 4: Create Variables of Different Data Types (Numbers, String, boolean, object, array) and log each variable using "Typeof" operator
Here i Will Use Student Details and Create all Data Types
*/

let name ="Yogendra Singh Rathore" //String
let height = 5.6 // Number

// Object
const basicDetails = {
    address : "123, Khatipura Jaipur",
    age : 28,
    email : "yogendra@google.com",
    collage_year : "3rd Year",
    subjects : ["Python","AI","Cyber Security","Java Script"]  // Array
}

//Array
const inClass = ["lecture",1,"Status",true]

console.log("About Student \n", ["Name:- "+name,"Height:- "+height,"Age:- "+basicDetails.age, "Email ID:- "+basicDetails.email,"Current Collage Year:- "+ basicDetails.collage_year,"Subjects:- "+basicDetails.subjects,"Today Class Attend:- "+inClass])


/* Activity 4: Reassigning Variable 
Task 5: Create Variables and Reassign its Value and Print Both
*/

let myVariable = "Yogendra Singh"
console.log("Initial value of myVariable:", myVariable);

// Reassign the variable to a new value
myVariable = "Yogi Rathore"
console.log("New value of myVariable:", myVariable);

/* Activity 5: Reassigning Coust
Task 6: Create const and try to reassign it's value
*/

const myConstant = "Hi"
console.log("Value of myConstant:", myConstant);

// Since we cannot reassign a const variable, we'll demonstrate immutability
try {
    myConstant = "Hello" // This will throw an error
} catch (e) {
    console.log("Error when trying to reassign myConstant:", e.message)
}
