import { Router } from 'express';
import { createPhoto, getPhoto } from '../controllers/photo.controller';
import multer from '../libs/multer';

const router = Router();

router
	.route('/')
	.post(multer.single('image'), createPhoto)
	.get(getPhoto);

router.get('/clasico', (req, res) => {
	res.send('');
});
export default router;
