require("dotenv").config()


const express  = require('express');
// connect mongoose
const mongoose = require('mongoose');
// to acces routes workout
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts/',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI)
.then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
        console.log('connected on db & listening on port', process.env.PORT)
    })
})
.catch((error) =>{
    console.log(error)
})


