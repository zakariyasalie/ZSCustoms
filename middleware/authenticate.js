import {compare} from "bcrypt";
import { getUserDb } from "../model/usersDb.js";
import jwt from 'jsonwebtoken'
import {config} from "dotenv"
config()


const  checkUser= async(req,res,next)=>{
    const {emailAdd,password}=req.body;
    // let pass = await getUserDb(emailAdd)
    let hashedPassword = (await getUserDb(emailAdd)).password
    // console.log(hashedPassword);
    
    let result = await compare(password,hashedPassword)
    if(result==true){
        let token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1h'})
        req.body.token = token
        console.log(token);
        
        next()
            return 
        }else
        res.send('incorrect password')
   

}
export {checkUser}