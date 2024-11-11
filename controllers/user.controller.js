import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";

import jwt from "jsonwebtoken";


 const generateToken = async(userId)=>{
  try{
    const user= await User.findById(userId);

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateARefreshToken();

    user.refreshToken= refreshToken;

    await user.save({validateBeforeSave:false})

    return {accessToken, refreshToken}

  }  catch (error){
    throw new ApiError(500,"something went wrong")
  }
 }



//steps for signup
//take data from request body
//check if data is available
// check if data already exist in db
//save the data in the db and hash the passowrd 

const signUp = asyncHandler(async (req,res)=>{
  const {name,email,password}=req.body

  if([name,email,password].some((field)=>field?.trim==="")){
    throw new ApiError(400,"all fields are required")
  }

  const existedUser= await User.find({
    $or:[{name},{email}]
  })

  if(existedUser){
    throw new ApiError(409,"user with email exists")
  }
  const user = await User.create({name,email,password})

  const createdUser= await User.findById(user._id).select("-password -refreshToken")

  if(!createdUser){
    throw new ApiError(500,"Something wwent wrong")
   }

   return res.status(201).json(new ApiResponse(200,createdUser,"signup successfully"))



})



// take data from request
// check if user exists in db
// check if password correct
//generate refresh and save it in db  and genrate access token , then send response and access token via cookies

const loginUser = asyncHandler(async (req,res) =>{
  const {email,password}=req.body
  
  if (!email || !password) {
    throw new ApiError(400, "Username or password required");
  }
  

  const user = await User.findOne({email});
  if(!user){
    throw new ApiError(404,"user not found")
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if(!isPasswordValid){
    throw new ApiError(401, "credentials does not exist")

  }

  const {accessToken,refreshToken} = await generateToken(user._id);

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const options={
    httpOnly:true,
    secure:true
  }

  return res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken,options).json(new ApiResponse(200,{user:loggedInUser,accessToken,refreshToken},"user loggedin"))
 })

//logout user algo
// 37
 const logOut = asyncHandler(async (req,res)=>{
  await User.findByIdAndUpdate(
    req.user._id,{
      $set:{
        refreshToken:undefined
      }
    },
    {
      new:true
    }
  )
    
  const options={httpOnly:true,
    secure:true
  }

  return res.status(200).clearCookie("accessToken").clearCookie("refreshToken").json(new ApiResponse(200, {}, "User logout"))

 })


export {loginUser,signUp,logOut};

