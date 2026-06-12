import { expect, it } from "vitest";
import { PropertySymbol } from "happy-dom";

it("launches happy-dom timeouts", async () => {
	const browserWindow = (<any>global.document)[PropertySymbol.window];
	browserWindow.setTimeout(() => console.log("setTimeout"), 500);
	browserWindow.setInterval(() => console.log("setTimeout"), 500);
	await browserWindow.happyDOM.close();
	expect(1).toBe(1);
});
