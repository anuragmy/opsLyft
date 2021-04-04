import express from 'express';
import { filterCases, changeDate } from '../controllers/covid';

const router = express.Router();

router.get('/cases', filterCases);
router.get('/change', changeDate);

export = router;
