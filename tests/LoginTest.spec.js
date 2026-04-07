import {test,expect} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage.js"
import {BasePage} from "../pages/BasePage.js"
import { randomEmail } from "../utils/helper.js";


test("Verify the login functionality", async function ({page}){

    //await page.goto("https://freelance-learn-automation.vercel.app/login");

    const lp=new LoginPage(page) ;
    lp.launchUrl("https://freelance-learn-automation.vercel.app/login")
    await lp.enterEmail("admin@email.com");

   // const email=randomEmail("prodUser") //prodUser_1774466208220@email.com
   // const email=randomEmail() testUser_1774466018783@email.com
   // await lp.enterEmail(email);
    await lp.enterPassword("admin@123");
    await lp.clickOnSubmit();
    await expect(page.locator("//button[text()='Cart']")).toBeVisible();
    await page.locator("//button[text()='Cart']").click();
    console.log(await lp.currentUrl());
    console.log(await lp.currentTitle());
    await lp.navigateBack();
    console.log(await lp.currentUrl());
    console.log(await lp.currentTitle());

    



})