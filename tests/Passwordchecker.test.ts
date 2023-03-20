import { passwordChecker } from "../src/passwordCheckr";

describe("passwordChecker", () => {
    it("check that is a valid password", () => {
        const password = "As8;hjskdL";

        const check = passwordChecker(password);

        expect(check).toBeTruthy();
    });
});