
const date= new Date()
const day=date.getDate()
const hour=date.getHours()


const logger=(req,res,next)=>{
if(hour>18){
    res.json('bara rawa , msakrin')
}
next()
}

module.exports=logger