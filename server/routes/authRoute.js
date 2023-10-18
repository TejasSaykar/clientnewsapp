import express from 'express'
import { SignUpController, SingInController, getAllUserController } from '../controllers/authController.js';

const router = express.Router();

router.post("/signup", SignUpController);
router.post("/signin", SingInController);
router.get("/all-users", getAllUserController)

export default router