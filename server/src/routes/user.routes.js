import { Router } from 'express';

import {
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  loginUser,
} from '../controllers/user.controller.js';

import { authentication } from '../middlewares/authentication.js';

const router = Router();

router.get('/user/', authentication, getUserById); // ✅

router.post('/user', createUser); // ✅

router.post('/login', loginUser); // ✅

router.patch('/user/:id', authentication, updateUser); // ✅

router.delete('/user/:id', authentication, deleteUser); // ✅

export default router;
