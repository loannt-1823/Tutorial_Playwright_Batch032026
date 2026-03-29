import { test, expect } from "@playwright/test";

// Login success
test ('Login thành và logout thành công', async ({page}) =>{
    // Đăng nhập thành công
    await test.step('Đăng nhập vào hệ thống', async () => {
        await page.goto ('https://www.saucedemo.com/inventory.html');
        await page.locator ('#user-name').fill('standard_user');
        await page.locator ('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
    });

    // Logout thành công
    await test.step('Logout thành công', async () => {
        await page.locator('#react-burger-menu-btn').click();
        await page.locator('#logout_sidebar_link').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });
 });