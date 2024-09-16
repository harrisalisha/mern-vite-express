import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'
import path from 'path'; //buitin module from nodejs
import productRoute from './routes/productRoute.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();// go under the root

app.use(express.json())//middleware that allow to get json data from req.body
app.use('/api/products', productRoute)

//in prod react go to dist as static asset files
if(process.env.NODE_ENV === "production"){
     app.use(express.static(path.join(__dirname, "/frontend/dist")));
     //app.use(express.static('__dirname', '../frontend/dist'))

     // other then this route ,app.use('/api/products', productRoute), go to frontend => dist => index.html
     app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
        //res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"))
    })
}

app.listen(PORT , ()=> {
    connectDb();
    console.log(`Server is Running at http://localhost: ${PORT}`)
});