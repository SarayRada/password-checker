export const passwordChecker = (password: string): boolean => {
	if (password.length < 8) {
		return false;
	}
	if (password.length > 20) {
		return false;
	}
	if (!/[A-Z]/.test(password)) {
		return false;
	}
	if (!/[a-z]/.test(password)) {
		return false;
	}
	if (!/[0-9]/.test(password)) {
		return false;
	}
	const specialCharacters = /[;()\\[\]{}:"'?!*=+-_¿¡]/;
	if (!specialCharacters.test(password)) {
		return false;
	}

	return true;
};
