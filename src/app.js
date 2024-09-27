import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app=express();


//using cors middleware..
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json({limit:"16kb"}))//we use this line beacuse our server can handle json files 
//and we will not accept unlimited json req so we limit it to 16kb storage
app.use(express.urlencoded({extended:true,
    limit:"16kb"
}))//this basically handles all url encoded data like we can encoded url 
app.use(express.static("public"))
app.use(cookieParser());//cookie parser is used to read the cookies



app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`);
})

export {app};