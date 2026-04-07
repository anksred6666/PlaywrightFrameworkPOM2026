import {test as base, expect} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage.js"
import { RegistrationPage } from "../pages/RegistrationPage.js";
import {CoursePage} from "../pages/CoursePage.js"

/** @typedef {import('../pages/LoginPage.js').LoginPage} LoginPage */
/** @typedef {import('../pages/RegistrationPage.js').RegistrationPage} RegistrationPage */

/**
 * @typedef {Object} MyFixtures
 * @property {LoginPage} loginPage
 * @property {RegistrationPage} registrationPage
 */

/** @type {import('@playwright/test').TestType<MyFixtures, {}>} */

const test=base.extend({

    loginPage:async ({page},use) => {

        const loginPage=new LoginPage(page);
        await use(loginPage);

    },

    /** @type {import('../pages/RegistrationPage.js').RegistrationPage} */
   registrationPage :async ({page},use)=>{

        const registrationPage=new RegistrationPage(page);
        await use(registrationPage);

    },

    courseePage: async ({page},use)=>{
        const coursePage=new CoursePage(page)
         await use(coursePage)

    }
});

export{test,expect}