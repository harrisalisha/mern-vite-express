import mongoose from 'mongoose'

export const connectDb= async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database is connected at : ${conn.connection.host}`)
    }catch(error){
        console.error();
        process.exit(1)
        //1 failed
        //0 success
    }                  
    
}
