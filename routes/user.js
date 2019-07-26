import express from 'express';

const router = express.Router();

// User Info
router.get('/1', verifyToken, (req, res) => {
  res.send('user!!');
});

export default router;
