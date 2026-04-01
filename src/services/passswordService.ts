

export const passwordService = (size: number = 8) => {
    let password: string = '';
    let characters: string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*()';

    for (let i = 0; i < size; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return password;
};