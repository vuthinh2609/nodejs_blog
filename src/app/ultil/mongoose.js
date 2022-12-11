module.exports = {
    multipleMongooseToObject: (mongoose)=>{
        return mongoose.map(course=>course.toObject())
    },
    mongooseToObject: (mongoose)=>{
        return mongoose? mongoose.toObject(): mongoose
    }
}