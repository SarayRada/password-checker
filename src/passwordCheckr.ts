export const passwordChecker = (password: string): boolean => {
    const passwordSplit = password.split("");
    if(password.length < 8) return false;
    else if(password.length > 20) return false;
    else if (!/[A-Z]/.test(password)) return false;
    else if (!/[a-z]/.test(password)) return false;
    else return true;
};
