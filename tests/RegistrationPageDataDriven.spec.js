import {test,expect} from "../fixtures/fixture.js"
import testData from "../testdata/registration.json"


test.describe("Verify user registration", ()=>{

    for(const data of testData){


        test(`Verify registration for user---> ${data.name}`, async ({registrationPage})=>{


            await registrationPage.launchUrl("https://freelance-learn-automation.vercel.app/signup");

            await registrationPage.enterName(data.name)

            await registrationPage.enterEmail(`${data.email}_${Date.now()}@yopmail.com`)

            await registrationPage.enterPassword(data.password)

            await registrationPage.selectInterest()

            await registrationPage.selectGender()

            await registrationPage.selectState(data.state)

            await registrationPage.selectHobbies(data.hobbies)

          // await registrationPage.clickSignup()

        })
    }




})

