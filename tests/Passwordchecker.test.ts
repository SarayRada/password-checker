import { passwordChecker } from "../src/passwordCheckr";

describe("passwordChecker", () => {
    it("check that is a valid password", () => {
        const password = "As8;hjskdL";

        const check = passwordChecker(password);

        expect(check).toBeTruthy();
    });

    it("check that isn't valid with less than 8 characters", () => {
        const password = "As8;hjs";

        const check = passwordChecker(password);

        expect(check).toBeFalsy();
    });
});