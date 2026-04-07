
import {test,expect} from "@playwright/test"
export class BasePage{
 /**
    * @param{import("@playwright/test").Page} page
    */

    constructor(page){
        this.page=page
    }
   
    async pageRefresh(){
        await this.page.reload()
    }

    async navigateBack(){
        await this.page.goBack()
    }

    async navigateForward(){
        await this.page.goForward()
    }

    async launchUrl(url){
        await this.page.goto(url)
    }

    async currentUrl(){
        return this.page.url()
    }

    async currentTitle(){
        return this.page.title()
    }

    async assertUserLoginUrl(){
        await expect(this.page).toHaveURL(/login/)
    }


 }