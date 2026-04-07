import {test,expect} from "@playwright/test"
import { BasePage} from "./BasePage.js"

export class CoursePage extends BasePage {
/** @param {import('@playwright/test').Page} page */
    constructor(page){
        super(page)
        this.page=page
        this.manage=this.page.locator("//span[text()='Manage']")
        this.manageCourse=this.page.locator("//a[text()='Manage Courses']")
        this.addNewCourse=this.page.getByAltText("add")
        this.thumbnail=this.page.locator("#thumbnail")
        this.courseName=this.page.locator("#name")
        this.description=this.page.locator("#description")
        this.instructor=this.page.locator("#instructorNameId")
        this.price=this.page.locator("#price")
        this.startsFrom=this.page.locator("//input[@name='startDate']")
        this.startFromDates=this.page.locator("//div[contains(@class,'react-datepicker__day') and contains(@aria-label,'Choose')]");
        this.endsOn=this.page.locator("//input[@name='endDate']")
        this.currentMonth=this.page.locator("//div[@class='react-datepicker__current-month']")
        this.clickNext=this.page.locator("//button[@aria-label='Next Month']")
        this.progCategory=this.page.locator("//div[text()='Select Category']")  
        this.categoryselection=this.page.locator("//button[text()='AWS']") 
        this.clickSave=this.page.locator("//button[text()='Save']")  
        this.courseCheckbox=this.page.locator("//td[text()='Selenium']/preceding::div/input[@type='checkbox']") 
         this.clickDeletebutton=this.page.locator("//td[text()='Selenium']/following::td/button[contains(@class,'delete-btn')]")
    }

    async hoverManage(){
       await this.manage.hover()
    }

    async clickManageCourse(){
        await this.manageCourse.click()
    }

    async clickAddNewCourse(){
        await this.addNewCourse.click()
    }

    async addThumbnail(path){
        await this.thumbnail.setInputFiles(path)
    }

    async addCouseName(courseName){
        await this.courseName.fill(courseName)
    }

    async addDescription(description){
        await this.description.fill(description)
    }

    async addInstructor(instructor){
        await this.instructor.fill(instructor)
    }

    async addprice(price){
        await this.price.clear()
        await this.price.fill(price)

    }
    async selectStartFromCalender(start_date){

        await this.startsFrom.click();
        let availableDates=await this.startFromDates.count()
        for(let i=0;i<availableDates.length;i++){
            let selectStartDate=await this.startFromDates.nth(i).innerText();
            if(selectStartDate=="28")
            {
                await this.startFromDates.nth(i).click()
                break;
            }
        }  
    }

    async selectEndsOnCalender(end_date){

        await this.endsOn.click()
        let current_month=await this.currentMonth.innerText();
        while(!current_month.includes("December 2026")){
            await this.clickNext.click()
            current_month=await this.currentMonth.innerText();
        }

        let availableDates=await this.startFromDates.count()
        for(let i=0;i<availableDates.length;i++){
            let selectDate=await this.startFromDates.nth(i).innerText();
            if(selectDate=="19"){
                await this.startFromDates.nth(i).click();
                break
            }
                

        }}

        async selectProgramCategory(){
            this.progCategory.click()
            this.categoryselection.click()
        }


        async clickSubmitButton(){
            this.clickSave.click()
        }


        async deleteCourse(){

            
            await this.courseCheckbox.click();
            await this.clickDeletebutton.click();
        }
    



}
