import { expect, test } from "@playwright/test";

test.describe("a11y smoke", () => {
  test("CV PDF: open, Escape, restore focus to trigger", async ({ page }) => {
    await page.goto("/es");

    const cvButton = page.getByRole("button", { name: "Ver CV" });
    await expect(cvButton).toBeVisible();
    await cvButton.focus();
    await cvButton.click();

    const dialog = page.locator("dialog[open]");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("heading", { name: /CV/i })).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await expect(cvButton).toBeFocused();
  });

  test("search: no results state", async ({ page }) => {
    await page.goto("/es");

    await page.getByRole("button", { name: "Abrir búsqueda" }).click();
    const input = page.locator("#search-modal-input");
    await expect(input).toBeVisible();
    await input.fill("zzzxqwy123notfound");

    await expect(page.getByText(/No se encontraron resultados/i)).toBeVisible();
  });

  test("projects: empty filter state", async ({ page }) => {
    await page.goto("/es/projects?filter=__no_such_filter__");
    await expect(page.getByTestId("projects-filter-empty")).toBeVisible();
  });
});
