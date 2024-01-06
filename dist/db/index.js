"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const variable_1 = require("../utils/variable");
mongoose_1.default.connect(variable_1.MONGO_URI)
    .then(() => {
    console.log("Db is connected");
})
    .catch((err) => {
    console.log('Db connection failed: ', err);
});
