import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

import path  from 'path'


// App Config
const app = express()

const port = process.env.PORT || 4000
const ipAddress = '0.0.0.0';

connectDB()

// middlewares
app.use(express.json())
app.use(cors({
    origin: ['https://wissalweb2.vercel.app','https://wissalwebb.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

// api endpoints
// Define the static folder for images
//const imagePath = path.join(__dirname, 'uploads');

app.use('/uploads', express.static('./uploads'));


app.use('/api/user',userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ipAddress, ()=> console.log(`Server running at http://${ipAddress}:${port}/`))