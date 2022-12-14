import jwt from 'jsonwebtoken'

const auth=(req,res,next)=>{

    try {
        const token=req.headers.authorization.split(" ")[1];
        let decodedData;

        if(token){
            decodedData=jwt.verify(token,'aos-secret-key')
            req.userId=decodedData?.id

        }

        next()
    } catch (error) {
        console.log(error);
    }
}


export default auth;