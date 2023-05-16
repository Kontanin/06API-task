const express =require('express')
const router=express.Router()



const {
    getAllJObs,
    createJob,
    getJob,
    updateJob,
    deleteJob}
     =require('../controllers/jobs')


router.route('/').post(createJob).get(getAllJObs)

router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)


module.exports = router