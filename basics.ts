// 1. khai báo biến
let username: string = "Loan test";
let age: number = 30;
let isActive: boolean = true;
let Roles: string[] = ["Admin"]; //Array of string

// 2. khai báo Object user
let user: { name: string, email: string, isAdmin: boolean}={
 name: "nguyen thi loan",
 email: "nguyen.thi.loan@sun-asterisk.com",
 isAdmin: true
};
// 3. In ra thông tin theo format
console.log(
    `user: ${user.name}, (email: ${user.email}), Roles: ${Roles.join(", ")}, Active: ${isActive}`
);
// 4. Nâng cao: viết function check tuổi
function checkAge(myAge: number): void
{
    if (myAge >=18){
        console.log("Result: Adult");
    }
    else{
        console.log ("Result: Under 18");
    }
    }
// Gọi hàm để chạy thử
checkAge(age);
