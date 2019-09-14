import { Router } from 'express';
import { createPhoto, getPhotos, getPhoto, deletePhoto } from '../controllers/photo.controller';
import multer from '../libs/multer';

const router = Router();

router.route('/').post(multer.single('image'), createPhoto);
router.get('/', getPhotos);
router.get('/:id', getPhoto);
router.delete('/:id', deletePhoto);

export default router;
