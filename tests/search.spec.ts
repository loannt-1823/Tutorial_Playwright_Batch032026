import {test,expect} from '@playwright/test';

test('kiểm tra tính năng tìm kiếm', async ({ page }) => {
    // 1. Đi tới page tìm kiếm
    await page.goto('https://www.w3schools.com');

    // 4. Thực hiện fill data vào ô search
    await page.locator ('#tnb-google-search-input').fill ('auto test play wright');

    // 5. Nhấn enter để tìm kiếm
    await page.locator('#tnb-google-search-input').press('Enter');

    // 6. Trả về kết quả
    await expect(page).toHaveTitle(/W3Schools/);
});