import { BasePage } from "./BasePage";
import {test,expect} from "@playwright/test"

export class RegistrationPage extends BasePage{
/** @param {import('@playwright/test').Page} page */
    constructor(page){
        super(page)
        this.page=page;
        this.name=this.page.getByPlaceholder("Name")
        this.email=this.page.getByPlaceholder("Email")
        this.password=this.page.getByPlaceholder("Password")
        this.interest=this.page.locator("//label[text()='PlayWright']/preceding-sibling::div/input[@type='checkbox']")
        this.gender=this.page.locator("//input[@value='Female']")
        this.state=this.page.locator("#state")
        this.hobbies=this.page.locator("#hobbies")
        this.signup=this.page.locator("//button[text()='Sign up']")
    }


    async enterName(name){
        await this.name.fill(name)
    }

    async enterEmail(email){
        await this.email.fill(email)
    }

    async enterPassword(password){
        await this.password.fill(password)
    }

    async selectInterest(){
        await this.interest.click()
    }

    async selectGender(){
        await this.gender.click()
    }

    async selectState(state){
        await this.state.selectOption({label:state})
    }

    async selectHobbies(hobbies){
        await this.hobbies.selectOption(hobbies)//for multi select dropdown
    }

    async clickSignup(){
        await this.signup.click()
    }

    

}