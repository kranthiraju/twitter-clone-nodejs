exports.GetHome = (req,res,next)=>{
   
    return res.status(200).json({
        "message":"hello ok",
    })
}