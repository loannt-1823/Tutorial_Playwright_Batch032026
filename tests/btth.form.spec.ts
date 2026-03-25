import {expect, test} from '@playwright/test';

test('đăng kí user', async ({ page }) => {

    // 1. Đi tới page material
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

    // 2. Fill data
    await page.locator ("#username").fill('LoanNT');
    await page.locator ('#email').fill('nguyen.thi.loan@sun-asterisk.com');
    // gender
    await page.locator('input[type="radio"][value="male"]').check();

    // hobbies
    await page.locator('input[type="checkbox"][value="reading"]').check();
    await page.locator('input[type="checkbox"][value="cooking"]').check();
    await page.selectOption('#interests', ['technology', 'science']);
    await page.selectOption ('#country','usa');
    await page.locator ('#dob').fill('2026-03-24');

    // 3. Kiểm tra dữ liệu ĐÃ ĐIỀN (Trước khi Submit)
    await expect (page.locator('input[type="radio"][value="male"]')).toBeChecked();
    await expect (page.locator('input[type="checkbox"][value="reading"]')).toBeChecked();
    await expect (page.locator('input[type="checkbox"][value="cooking"]')).toBeChecked();
    await expect (page.locator('button')).toHaveText('Register');

    // 4. Cuối cùng mới Submit
    await page.locator ('button[type="submit"]').click();
});