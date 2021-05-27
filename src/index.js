import { createLogger } from "./scripts/logger/logger.js"
import "./index.scss";

console.log('tet')

const logger = createLogger('user login')
logger.log('login success')

console.log(logger)