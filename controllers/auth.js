const User =require('../models/User')
const{StatusCodes}=require('http-status-codes')
const {BadRequestError}=require('../errors')


const bcrypt = require('bcryptjs')
const register = async (req, res) => {
    try{
    const user = await User.create({ ...req.body })
    }
    catch(err){
        console.error(err)
    }
    // const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
  }



const login=async(req,res)=>{
    res.send(' login user')
}

module.exports={
    register,
    login,
}