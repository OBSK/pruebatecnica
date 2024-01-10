"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// JwtService.ts
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtService {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }
    generate(payload) {
        return jsonwebtoken_1.default.sign(payload, this.secretKey);
    }
    verify(token) {
        return jsonwebtoken_1.default.verify(token, this.secretKey);
    }
}
exports.default = JwtService;
