import { expect, test } from "@playwright/test";

// 1. Password sai
test ('invalid password', async ({page}) =>{
    await page.goto ('https://www.saucedemo.com');

    // 2. Fill data vào form đăng nhập
    await page.locator ('#user-name').fill ('standard_user');
    await page.locator ('#password').fill ('Aa@123456');

    // 3. Verify data trước khi click button Login
    await expect (page.locator('#user-name')).toBeVisible();
    await expect (page.locator ('#password')).toBeVisible();

    // 4. Click button Login
    await page.locator ('#login-button').click();

    // 6. Kiểm tra nội dung có chứa đoạn text mong muốn không
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});

// 2. Không nhập user
test ('invalid username', async ({page}) =>{
    await page.goto ('https://www.saucedemo.com');

    // 1. Fill data vào form đăng nhập
    await page.locator ('#user-name').fill('');
    await page.locator('#password').fill('secret_sauce');

    // 2. Verify data trước khi click button Login
    await expect (page.locator('#user-name')).toBeVisible();
    await expect (page.locator ('#password')).toBeVisible();

    // 3. Click button Login
    await page.locator ('#login-button').click();

    // 4. Kiểm tra nội dung có chứa đoạn text mong muốn không
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});

// 3. Login với user bị khóa
test ('User bi block', async ({page}) =>{
    await page.goto ('https://www.saucedemo.com');

    // 1. Fill data vào form đăng nhập
    await page.locator ('#user-name').fill('locked_out_user');
    await page.locator('#password').fill('secret_sauce');

    // 2. Verify data trước khi click button Login
    await expect (page.locator('#user-name')).toBeVisible();
    await expect (page.locator ('#password')).toBeVisible();

        // 3. Click button Login
    await page.locator ('#login-button').click();

    // 4. Kiểm tra nội dung có chứa đoạn text mong muốn không
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
});