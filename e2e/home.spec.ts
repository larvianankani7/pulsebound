import { expect, test } from "@playwright/test";

test("shows the SYLVARA brand", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "SYLVARA" })).toBeVisible();
});
