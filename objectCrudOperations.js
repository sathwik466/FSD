//write a javascript to add ,update,delete properties of an object
let student = {
    name: "Sathwik",
    age: 20,
    branch: "CSE"
};

console.log("Original Object:", student);

student.college = "CVR College of Engineering";
console.log("After Adding Property:", student);

student.age = 21;
console.log("After Updating Property:", student);

delete student.branch;
console.log("After Deleting Property:", student);
