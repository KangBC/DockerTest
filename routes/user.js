import express from 'express';
import User from '../models/Users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../core/config/config.dev';
import verifyToken from '../modules/verifyToken';
import { AddUserValidation, LoginValidation } from '../models/Validations';

const router = express.Router();

// User Info
router.get('/', verifyToken, (req, res) => {
  res.send('user!!');
});

export default router;
