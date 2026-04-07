import {expect} from "@playwright/test"
import {BasePage} from "./BasePage.js"

export class LoginPage extends BasePage {
    constructor(page){
        super(page);
        this.page=page;
        this.email=this.page.getByPlaceholder("Enter Email");
        this.password=this.page.locator("#password1");
        this.submit=this.page.locator("//button[text()='Sign in']");
    }

    async enterEmail(e_mail){
        await this.email.fill(e_mail)
    }
    async enterPassword(pass){
        await this.password.fill(pass)
    }

    async clickOnSubmit(){
        await this.submit.click();
        
    }
}