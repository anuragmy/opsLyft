import express from 'express';
import { filterCases } from '../controllers/covid';

const router = express.Router();

router.get('/cases', filterCases);

export = router;
