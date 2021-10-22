const express = require('express');
const Course = require('../Models/Course.model');

const CourseController = require('../Controllers/Course.Controller');

const router = express.Router();

router.get('/', CourseController.getAllCourses)

//create product
router.post('/', CourseController.createNewCourse);

//Get product by ID
router.get('/:id', CourseController.findCourseById);

//Get product by ID
router.put('/:id', CourseController.updateCourseById);

// Update product by ID
router.patch('/:id', CourseController.updateCourseById);

// delete product by ID
router.delete('/:id', CourseController.deleteCourseById);

module.exports = router;