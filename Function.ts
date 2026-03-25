// 1. hàm sum
function sum(a: number, b:number): number {
    return a+b;
}
// 2. Arror function multiply
const multiply = (a: number, b:number): number =>{
    return a*b;
}
// 3. hàm greet với tham số mặc định
function greet(name: string, Role: string = "Guest"): void {
    console.log('Hello ${name}, your role is ${role}');
}
// 4. Async function (Nâng cao)
async function deplayPrint(msg: string, time: number): Promise<void>{
    await new Promise(resolve => setTimeout(resolve, time));
    console.log(msg);
}

// Gọi chạy thử
console.log ("Sum", sum(5,10));
console.log("multiply:", multiply(4,5));
greet("Loan"); // chạy với mặc định
greet("Loan"), "Admin"; // chạy với giá trị truyền vào

console.log("Bắt dau doi...");
deplayPrint("Phan hoi sau 2 giay", 2000);
