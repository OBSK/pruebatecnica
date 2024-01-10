export function validateEmail(email: string): boolean {
    const regexEmail: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dominiosPermitidos: string[] = ["gmail.com", "hotmail.com", "yahoo.es"];

    if (!regexEmail.test(email)) {
        return false;
    }

    // Obtener el dominio del correo electrónico ingresado
    const dominio: string = email.split('@')[1];

    // Verificar si el dominio está en la lista de dominios permitidos
    if (dominiosPermitidos.includes(dominio)) {
        return true; // El correo pertenece a un dominio permitido
    } else {
        return false; // El correo no pertenece a un dominio permitido
    }
}