import express from "express";


const app = express();
const PORT=process.env.PORT;

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT ,()=>{
    console.log(`app is listening on port ${PORT}`)

})