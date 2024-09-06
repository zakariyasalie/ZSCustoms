import express from 'express'
import productsRoutes from './routes/productsRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
// import cors from "cors";

const app=express()
let port=process.env.PORT
app.use(express.json())
// app.use(cors({origin:'http://localhost:8080',credentials:true}))


app.use('/products',productsRoutes)
app.use( '/users',usersRoutes)
app.use(express.static('public'))
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    
    // console.log('http://localhost:' +port)
})