import { expect, it } from "vitest";

it("launches default timeouts", () => {
	window.setTimeout(() => console.log("setTimeout"), 500);
	window.setInterval(() => console.log("setTimeout"), 500);
	expect(1).toBe(1);
});
