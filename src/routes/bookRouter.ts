import express from "express";
import { bookController } from "../controllers/bookController";
import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "./public");
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  }),
});
export const bookRouter = express.Router();

bookRouter.get("/", bookController.getData);
bookRouter.get("/:id", bookController.getSingleData)

bookRouter.post("/", upload.single("file"), bookController.createData); // add multer as middleware
