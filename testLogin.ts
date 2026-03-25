import { LoginPage } from './pages/loginPage.js';
import { DashboardPage } from './pages/dashboardPage.js';

async function testLogin() {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();

    console.log("--- BẮT ĐẦU TEST CASE: LOGIN ---");
    
    await loginPage.gotoLoginPage();
    await loginPage.login("admin", "123456");
    await dashboardPage.verifyLoginSuccess();

    console.log("--- KẾT THÚC TEST CASE ---");
}

testLogin();