
const student = {
    name: "Sathwik",
    age: 20,
    branch: "CSE",
    college: "CVR College of Engineering"
};


console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Branch:", student.branch);
console.log("College:", student.college);
 
console.log("\nAll properties:");
for (let key in student) {
    console.log(key + ":", student[key]);
}
