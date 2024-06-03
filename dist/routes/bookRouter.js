"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: (req, file, callback) => {
            callback(null, "./public");
        },
        filename: (req, file, callback) => {
            callback(null, file.originalname);
        },
    }),
});
exports.bookRouter = express_1.default.Router();
// CRUD
exports.bookRouter.post("/", upload.single("file"), bookController_1.bookController.createData); // add multer as middleware
exports.bookRouter.get("/", bookController_1.bookController.getData);
exports.bookRouter.get("/:id", bookController_1.bookController.getSingleData);
exports.bookRouter.patch("/:id", bookController_1.bookController.updateData);
exports.bookRouter.delete("/:id", bookController_1.bookController.deleteData);
exports.bookRouter.get("/:id", bookController_1.bookController.deleteData);
