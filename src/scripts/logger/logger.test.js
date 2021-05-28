import { createLogger } from "./logger.js"

it("check create", () => {
	const logger = createLogger("user login")

	expect(logger.getLogs()).toEqual([])
})

it("check func log", () => {
	const logger = createLogger("user login")
	logger.log("login success")

	expect(logger.getLogs()).toEqual(["log - user login - login success"])
})

it("check func error", () => {
	const logger = createLogger("user login")
	logger.error("login failed")

	expect(logger.getLogs()).toEqual(["error - user login - login failed"])
});
