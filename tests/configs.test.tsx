import babel from "../babel.config"
import jest from "../jest.config"

describe("config files", () => {
	test("babel config", () => {
		expect(JSON.stringify(babel)).toBeTruthy()
	})
	test("jest config", () => {
		expect(JSON.stringify(jest).includes("coverage")).toBeTruthy()
	})
})
