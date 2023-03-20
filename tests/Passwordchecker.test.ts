import { passwordChecker } from "../src/passwordCheckr";

describe("passwordChecker", () => {
	it("checks that is a valid password", () => {
		const password = "As8;hjskdL";

		const check = passwordChecker(password);

		expect(check).toBeTruthy();
	});
	it("checks that isn't valid with less than 8 characters", () => {
		const password = "As8;hjs";

		const check = passwordChecker(password);

		expect(check).toBeFalsy();
	});
	it("checks that isn't valid with more than 20 characters", () => {
		const password = "As8;hjsAs8;hjsAs8;hjs";

		const check = passwordChecker(password);

		expect(check).toBeFalsy();
	});
	it("checks that isn't valid without upperCase", () => {
		const password = "as8;hjskdl";

		const check = passwordChecker(password);

		expect(check).toBeFalsy();
	});
	it("checks that isn't valid without lowerCase", () => {
		const password = "AS8;HJSKDL";

		const check = passwordChecker(password);

		expect(check).toBeFalsy();
	});
	it("checks that isn't valid without a number", () => {
		const password = "ASj;HJSKDL";

		const check = passwordChecker(password);

		expect(check).toBeFalsy();
	});
	test.each([
		";",
		"(",
		")",
		"[",
		"]",
		"{",
		"}",
		":",
		'"',
		"'",
		"?",
		"!",
		"*",
		"=",
		"+",
		"-",
		"_",
		"¿",
		"¡",
	])(`checks that is valid with a special character`, (char: string) => {
		const password = `ASjm${char}HJSK2L`;

		const check = passwordChecker(password);

		expect(check).toBeTruthy();
	});
});
