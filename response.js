const response = (StatusCode,Message, data, res) =>{
    res.status(StatusCode).json({
        payload: data,
            Message,
        metadata:{
            previous:"",
            next:"",
            current:""
        }
    })
}

module.exports = response