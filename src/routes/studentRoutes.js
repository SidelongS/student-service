import {Router} from 'express';
import {
    addStudent,
    findStudent,
    deleteStudent,
    updateStudent,
    addScore,
    findStudentsByName,
    countStudentsByNames,
    findStudentsByMinScore
} from '../controller/studentController.js';

const router = Router();

router.post('/student', addStudent);
router.get('/student/:id', findStudent);
router.delete('/student/:id', deleteStudent);
router.put('/student/:id', updateStudent);
router.put('/student/:id/score', addScore);
router.get('/student/name/:name', findStudentsByName);
router.post('/student/count/:name', countStudentsByNames);
router.get('/student/exam/:exam/min-score/:minScore', findStudentsByMinScore);

// TODO: Homework implement other routes

export default router;