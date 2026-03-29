import { test, expect } from "@playwright/test";

// 1. Đi tới trang saucedemo
test ('Login saucedemo success flow', async ({page}) =>{
    // STEP 1: Đăng nhập
    await test.step('Đăng nhập vào hệ thống', async () => {
        await page.goto('https://www.saucedemo.com');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page).toHaveURL(/inventory.html/);
    });

    // STEP 2: Thêm sản phẩm đầu tiên giỏ hàng (Tiếp tục trên trang hiện tại)
    await test.step('Thêm sản phẩm và kiểm tra giỏ hàng', async () => {
        await page.locator('#add-to-cart-sauce-labs-backpack').click();
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('1');
    });

    // STEP 3: Thêm sản phẩm thứ 2 vào giỏ hàng
    await test.step('Thêm sản phẩm thứ 2 vào giỏ hàng và kiểm tra giỏ hàng', async () => {
        await page.locator('#add-to-cart-sauce-labs-bike-light').click();
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('2');
    });
});