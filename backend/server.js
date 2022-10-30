require('dotenv').config()


const express=require('express')
const mongoose=require('mongoose')
const hotelRoutes=require('./routes/hotels')
//const roomRoutes=require('./routes/rooms')
//const authRoutes=require('./routes/auth')
//const userRoutes=require('./routes/user')
//const packageRoutes=require('./routes/packages')



const app=express()

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/hotels',hotelRoutes)
app.use('/api/hotels',roomRoutes)
app.use('/api/hotels',authRoutes)
app.use('/api/hotels',userRoutes)
app.use('/api/reviews',reviewRoutes)
app.use('/api/packages',packageRoutes)

mongoose.connect(process.env.MONGO_URI)
   //funct to do what next after connection
    .then(()=>{app.listen(process.env.PORT,()=>{
            console.log('conncted to db and welcome to our  port',process.env.PORT)
         })})
    .catch((error)=>{
        console.log(error)
    })
