const User =require('../models/User')
const{StatusCodes}=require('http-status-codes')
const {BadRequestError,UnauthenticatedError}=require('../errors')
const jwt =require('jsonwebtoken')



  const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
  }

const login=async(req,res)=>{
    const {email,password} = req.body
    console.log("check")
    if(!email||!password){
        throw new BadRequestError('Pleaase provide email address and password')

    }
    const user=await User.findOne({email})
    console.log(user,"user")
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    console.log("here",user)
    const token=user.createJWT()
    const isPasswordCorrect = await user.comparePassword(password)
    console.log(isPasswordCorrect,"password",password)
    if (!isPasswordCorrect) {
      throw new UnauthenticatedError('Invalid Credentials')
    }
    
    res.status(StatusCodes.OK).json({user:{name:user.name},token})
}

module.exports={
    register,
    login,
}