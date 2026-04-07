


export function randomEmail(prefix="testUser"){

    let email=`${prefix}_${Date.now()}@email.com`

    return email;

}