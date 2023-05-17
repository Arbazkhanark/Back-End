import express from "express";
import path from "path";


const app=express();

const users=[];

//Setting Template
app.set("view engine","ejs");

//MiddleWare  
app.use(express.static(path.join((path.resolve()),"public")));
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("form" ,{company:"OtakuArc"});
})

app.post("/contact",(req,res)=>{
    // console.log("Saved");
    users.push({UserName:req.body.name,Email:req.body.mail});
});

app.get("/users",(req,res)=>{
    res.send(users);
})

const PORT=4000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT} .....`);
})