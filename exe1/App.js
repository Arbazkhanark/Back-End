import express  from "express";
import path from "path";

const app=express();

const users=[];

//Setting View Engine
app.set("view engine", "ejs")

//MiddleWares
app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended:true})) // req.body Activate


app.get("/",(req,res)=>{
    console.log("I am Served");
    res.render("index",{name:"Arbaaz"})
})

app.post("/contact",(req,res)=>{
    // res.send("Message Sent");
    users.push({UserName:req.body.name,Email:req.body.email});
});

app.get("/users",(req,res)=>{
    res.send(users);
})


const PORT=4000;

app.listen(PORT,()=>{
    console.log(`Server is Started on PORT ${PORT}....`);
});
