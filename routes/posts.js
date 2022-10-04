import express from 'express';

import {
  getPosts,
  createPost,
  deletePost,
  editPost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/', editPost);
router.delete('/', deletePost);

export default router;
