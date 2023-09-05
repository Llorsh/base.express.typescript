import { Router } from 'express';
import ExampleController from '../controllers/example.controller';

const router = Router();

router.get('/', [], ExampleController.index)

export { router as example };
