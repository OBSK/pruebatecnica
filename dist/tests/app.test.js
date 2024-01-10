"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe('Express App', () => {
    it('responds with "Hello Redis with Express.js and TypeScript!" at the root URL', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello Redis with Express.js and TypeScript!');
    }));
    it('caches data when accessing the /cache route', () => __awaiter(void 0, void 0, void 0, function* () {
        const response1 = yield (0, supertest_1.default)(app_1.default).get('/cache');
        expect(response1.status).toBe(200);
        const response2 = yield (0, supertest_1.default)(app_1.default).get('/cache');
        expect(response2.status).toBe(200);
        expect(response2.body).toEqual(response1.body);
    }));
});
