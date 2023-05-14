const Job =require('../models/Job');
const {StatusCodes}=require('http-status-codes');
const {BadRequestError,NotFoundError}=require('../errors')

const getAllJObs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
  }
const createJob=async(req,res)=>{
    req.body.createdBy=req.user.userId
    const job=await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}
const getJob=async(req,res)=>{
    res.send("register")
}
const updateJob=async(req,res)=>{
    res.send("deleteJob")
}
const deleteJob=async(req,res)=>{
    res.send("deleteJob")
}
module.exports={
    getAllJObs,
    getJob,
    deleteJob,
    createJob,
    updateJob,

}