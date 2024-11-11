import mongoose from "mongoose"


const connectDb = async()=>{
  try{
    const connection = await mongoose.connect(`${process.env.MONGODB_URL}/heart-disease}`)
  }
  catch(error){
    console.log("mogodb connection error",error);

    process.exit(1)
  }
}
export default connectDb