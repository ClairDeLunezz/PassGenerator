export function passwordService(){
    let password:string = ''
    let characters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/`~'
    let passwordLength = 15

    for(let i = 0; i < passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password
}