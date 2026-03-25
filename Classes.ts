// 1. Tạo interface
interface IUser {
    name: string;
    email: string;
    isAdmin: boolean;
}
// 2. Tạo class user
class User implements IUser{
     name: string;
    email: string;
    isAdmin: boolean;
    // Constructor nhận giá trị khi khởi tạo
constructor(name: string, email: string, isAdmin: boolean){
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
}
//Method lấy thông tin
getInfo(): string {
        return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
    }
}
// 3. Bài tập nâng cao: Class AdminUser kế thừa từ User
class AdminUser extends User {
    // Admin mặc định isAdmin luôn là true
    constructor(name: string, email: string) {
        // super phải truyền đúng 3 tham số mà User yêu cầu
        super(name, email, true); 
    }

    deleteUser(targetUser: User): void {
        console.log(`Admin ${this.name} đã xóa người dùng: ${targetUser.name}`);
    }
}

// --- THỰC THI ---
const user1 = new User("Loan", "loan@test.com", false);
const admin1 = new AdminUser("Loan1", "loan1@test.com");

const users: User[] = [user1, admin1];

console.log("--- Danh sách User ---");
users.forEach(u => {
    console.log(u.getInfo());
});

console.log("\n--- Thực hiện hành động Admin ---");
admin1.deleteUser(user1);