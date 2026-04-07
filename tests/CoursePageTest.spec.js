import {test,expect} from "../fixtures/fixture.js"
import loginCreds from "../testdata/credentials.json" assert { type: "json" };
import courseDetails from "../testdata/course.json" assert {type: "json"};
require("dotenv").config({path:"../config/.env"}) 

test("Verify Manage Course page functionality", async({loginPage,courseePage})=>{

    await loginPage.launchUrl("/login")
    await loginPage.enterEmail(loginCreds.username)
    await loginPage.enterPassword(loginCreds.password)
    await loginPage.clickOnSubmit()
    

    await courseePage.hoverManage()
    await courseePage.clickManageCourse()
    await courseePage.clickAddNewCourse()
    await courseePage.addThumbnail(courseDetails.thumbnailPath)
    await courseePage.addCouseName(courseDetails.courseName)
    await courseePage.addDescription(courseDetails.description)
    await courseePage.addInstructor(courseDetails.instructor)
    await courseePage.addprice(courseDetails.price)
    await courseePage.selectStartFromCalender()
    await courseePage.selectEndsOnCalender()
    await courseePage.selectProgramCategory()
    await courseePage.clickSubmitButton()
    await courseePage.deleteCourse()
})
