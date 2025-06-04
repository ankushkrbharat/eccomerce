import express, { json, urlencoded } from "express";
import productRoutes from "./routes/products/index.js"

const app = express();
const PORT=process.env.PORT;
app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/products",productRoutes);

app.listen(PORT ,()=>{
    console.log(`app is listening on port ${PORT}`)

})