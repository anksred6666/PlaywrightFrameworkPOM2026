import {test,expect} from "../fixtures/fixture.js"
import { BasePage } from "../pages/BasePage.js"
import { RegistrationPage } from "../pages/RegistrationPage.js"


test.describe("New user registration TC",  function(){


    test("Verify registration page functionality", async ({registrationPage})=>{
        await registrationPage.launchUrl("https://freelance-learn-automation.vercel.app/signup")

       await registrationPage.enterName("March USer")

        await registrationPage.enterEmail(`testuser${Date.now()}@yopmail.com`)

        await registrationPage.enterPassword("Admin@12345")

        await registrationPage.selectInterest()

        await registrationPage.selectGender()

        await registrationPage.selectState("Maharashtra")

        await registrationPage.selectHobbies(["Playing","Singing"])

        await registrationPage.clickSignup()

        await registrationPage.assertUserLoginUrl()
        
        




})

})
