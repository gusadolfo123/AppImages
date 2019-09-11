import { Router } from 'express';
import { HelloWorld } from '../controllers/photo.controller';

const router = Router();

router.route('/').get(HelloWorld);

export default router;
