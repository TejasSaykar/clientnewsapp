import express from 'express'
import { SignUpController, SingInController } from '../controllers/authController.js';

const router = express.Router();

router.post("/signup", SignUpController);
router.post("/signin", SingInController)

export default router