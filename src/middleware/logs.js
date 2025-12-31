export const logRequest = (req,res,next)=>{
    console.log('log request:',req.path)
    next()
}
