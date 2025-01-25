import express from "express";
import cors from "cors";
import { ContactForm } from "../controllers/UserController.js";

const router = express.Router();
router.use(cors());

router.post("/contactform", ContactForm);

export default router;
