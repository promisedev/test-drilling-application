
import Subjects from '../model/subjectschema.js'

const Subject = async(req,res)=>{

const subjects = await Subjects.find()
if(!subjects) return res.sendStatus(201)
res.status(200).json(subjects)

}

export default Subject