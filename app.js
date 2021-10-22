const express = require('express');
const mongoose = require('mongoose');
const course = require('./Models/Course.model');


const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/RestAPIMidterm')
.then(() => {
    console.log('MongoDB Connected...')
})

app.listen(3000, () => {
    console.log("Server started on port 3000...")
});







//set Views






// app.use('/', (req, res) => {

//     const course = new course ({
//         name: req.body.name,
//         courseNumber: req.body.courseNumber,
//         time: req.body.time
//     });

//     course.save()
//     .exec()
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         res.json({message: err});
//     })
// })

app.use(express.static('public'));

const CourseRoute = require('./Routes/Course.route')
app.use('/courses', CourseRoute)

//Routes Middleware
app.use((req, res, next) => {
    //fired when wrong route
  const err = new Error("Not Found");
  err.status = 404
  //pass to error handler below
  next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
        
    })
    return;
})



//Routes

//Get means give us back a message
//Post to give a message
//Delete to remove
//Patch to update a post or something


//Middlewares
// Functions that run when route is executed

