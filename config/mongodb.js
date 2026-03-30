import mongoose from "mongoose";

const connectDB = async () => {
   
    mongoose.connection.on('connected',() => {
        console.log("Data Base Server is Connected On Port 27017");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}`)
    //await mongoose.connect("mongodb://root:example@localhost:27017/e-commerce?authSource=admin")

}

// const connectDB = async () => {
//     try {
//       await mongoose.connect('mongodb://root:example@localhost:27017/e-commerce?authSource=admin', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('MongoDB connected successfully');
//     } catch (error) {
//       console.error('MongoDB connection error:', error);
//       process.exit(1); // Exit process with failure
//     }
// }  

export default connectDB;