const express =require('express')
const router=express.Router()



const {
    getAllJObs,
    createJob,getJob,
    updateJob,
    deleteJob}
     =require('../controllers/jobs')


router.route('/').post(createJob).get(getAllJObs)
router.route('/:id').post(createJob).get(getAllJObs).delete(deleteJob).patch(updateJob)


module.exports = router