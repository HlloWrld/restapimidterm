
const mongoose = require('mongoose');

const fs = require('fs');

const Course = require('../Models/Course.model');


module.exports = {

    // writeLog : async (req, res, next) => {
    //     const data = `${new Date().toUTCString()} - ${getAllCourses.results}\n`



    // },


    getAllCourses : async (req, res, next) => { 
        try {
            
            // const results = await Course.find({}, { __v: 0 })
            // const results = await Course.find({}, { name: 1, price: 1, _id: 0 })
            const results = await Course.find({}, { name: 1, courseNumber: 1, _id: 1 })
            res.send(results)
           


            const date = new Date().toUTCString();
            let logData = "Action Type: Get All Courses" + JSON.stringify(results) + date + "\n";
            fs.appendFile("log.txt", logData, (err) => {
                if (err) throw err;
                console.log('data not add to log.txt');
            });
            next();

    
        } catch (error) {
            console.log(error.message);
        }
    },

    

    findCourseById: async (req, res, next) => {
        const id = req.params.id;
        try {
            //findbyid = mongoose method
            const Course = await Course.findById(id)
            res.send(Course)



            const date = new Date().toUTCString();
            let logData = "Action Type: Find Course By ID" + JSON.stringify(Course) + date + "\n";
            fs.appendFile("log.txt", logData, (err) => {
                if (err) throw err;
                console.log('data not add to log.txt');
            });
            next();

            fs.writeFileSync("\nlog.txt", JSON.stringify(Course));
            console.log("File written\n");

        } catch (error) {
            console.log(error.message)
        }
    },

    findCourseByIdPut: async (req, res, next) => {
        const id = req.params.id;

        try {
            //findbyid = mongoose method
            const Course = await Course.findById(id)
            res.send(Course)



            const date = new Date().toUTCString();
            let logData = "Action Type: Find Course By ID" + JSON.stringify(Course) + date + "\n";
            fs.appendFile("log.txt", logData, (err) => {
                if (err) throw err;
                console.log('data not add to log.txt');
            });
            next();

            fs.writeFileSync("\nlog.txt", JSON.stringify(Course));
            console.log("File written\n");

        } catch (error) {
            console.log(error.message)
        }
    },


    createNewCourse: async (req, res, next) => {

    try {
        const course = new Course(req.body);
        const result = await course.save();
        res.send(result);


        const date = new Date().toUTCString();
        let logData = "Action Type: Create" + JSON.stringify(result) + date + "\n";
        fs.appendFile("log.txt", logData, (err) => {
            if (err) throw err;
            console.log('data not add to log.txt');
        });
        next();

    } catch (error) {
        console.log(error.message);
    }

    },

    updateCourseById : async (req, res, next) => {

        try {
            const id = req.params.id;
            const updates = req.body;
            const options = {new: true};
    
            //mongoos method findbyidandupdate
            const result = await Course.findByIdAndUpdate(id,
                updates, options)
                res.send(result);


            const date = new Date().toUTCString();
            let logData = "Action Type: Update" + JSON.stringify(result) + date + "\n";
            fs.appendFile("log.txt", logData, (err) => {
                if (err) throw err;
                console.log('data not add to log.txt');
            });
            next();
    
    
        } catch (error) {
            console.log(error.message)
        }
    },

    deleteCourseById : async (req, res, next) => {
        const id = req.params.id
        try {
            const result = await Course.findByIdAndDelete(id)
            console.log(result)
            res.send(result);

            const date = new Date().toUTCString();
            let logData = "Action Type: Delete" + JSON.stringify(result) + date + "\n";
            fs.appendFile("log.txt", logData, (err) => {
                if (err) throw err;
                console.log('data not add to log.txt');
            });
            next();

        } catch (error) {
            console.log(error.message)
        }
    
    }

}