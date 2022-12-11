const Course = require('../models/Course')
const {mongooseToObject} = require('../ultil/mongoose')

class CourseController {

  //[GET] Course
  details(req, res, next) {
    Course.findOne({slug:req.params.slug})
    .then(course => {
      res.render('courses/details',{course: mongooseToObject(course)})
    })
    .catch(next)
  }

  //[GET] Form Create Course
  createForm(req,res,next){
    res.render('courses/create')
  }

  //[POST] Create Course
  create(req,res,next){
    var formData = {...req.body}
    formData.image = `http://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
    var course = new Course(formData)
    course.save()
    .then(course=>res.redirect(`/courses/${course.slug}`))
    .catch(next)
  }

  //[GET] courses/edit/:id Edit Form Course
  editForm(req,res,next){
    var course = Course.findById(req.params.id)
    course.then(course=>res.render('courses/edit',{course: mongooseToObject(course)}))
          .catch(next)
  }

  //[PUT] courses/update/:id
  update(req,res,next){
    Course.updateOne({_id: req.params.id},req.body)
    .then(course=>{res.redirect('/me/stored/courses')})
    .catch(next)
  }
}

module.exports = new CourseController();
