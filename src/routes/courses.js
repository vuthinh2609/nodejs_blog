const express = require('express');
const router = express.Router()
const courseController = require('../app/controllers/CourseController')


router.get('/create',courseController.createForm)
router.post('/create',courseController.create)

router.get('/edit/:id',courseController.editForm)
router.put('/update/:id',courseController.update)
router.delete('/:id',courseController.delete)
router.delete('/force/:id',courseController.forceDelete)
router.patch('/restore/:id',courseController.restoreCourse)

router.get('/:slug', courseController.details)

module.exports = router