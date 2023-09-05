import { Router } from 'express';
import { example } from './example.routes';

const router = Router();


router.use('/example', example)

export default router;