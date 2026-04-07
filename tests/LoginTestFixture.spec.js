

import {test,expect} from "../fixtures/fixture.js"
import {LoginPage} from "../pages/LoginPage.js"
import {BasePage} from "../pages/BasePage.js"



test("Verify with custom fixtures", async ({loginPage})=>{
    
   
    
    await loginPage.launchUrl("https://freelance-learn-automation.vercel.app/login")

    await loginPage.enterEmail("admin@email.com")

    await loginPage.enterPassword("admin@123")

    await loginPage.clickOnSubmit();

    console.log(await loginPage.currentUrl());           

    console.log(await loginPage.currentTitle());



//https://allurereport.org/docs/v2/install-for-windows/










})