export class LoginPage {
    async gotoLoginPage() {
        console.log("1. Điều hướng: Đang mở trang Login...");
    }

    async login(username: string, password: string) {
        console.log(`2. Hành động: Nhập user "${username}" và pass "${password}"`);
        console.log("3. Hành động: Click nút Login");
    }
}