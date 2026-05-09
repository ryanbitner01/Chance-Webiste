import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:5173");
	});

	test("Check components and metadata", async ({ page }) => {
		await expect(page).toHaveTitle(/Home/);
		let heroImage = page.getByRole("img");
		await expect(heroImage).toBeVisible();
		await expect(page.getByRole("button")).toHaveText("Buy Merch");
	});

	test("When buy merch button pressed the user is navigated to merch list page", async ({
		page,
	}) => {
		let button = await page.getByRole("button");
		await button.click();
		await expect(page).toHaveTitle("Merch");
	});
});
