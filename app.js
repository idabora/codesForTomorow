const express=require('express');
const app=express();
require('dotenv').config();
const sequelize=require('./config/database')
const authRoutes=require('./routes/authRoutes')
const serviceRoutes=require('./routes/serviceRoutes')
const categoryRoutes=require('./routes/categoryRoutes')

app.use(express.json());

app.use('/category',categoryRoutes);
// app.use('/service',serviceRoutes);
app.use('/auth',authRoutes);

sequelize.authenticate()
    .then(()=>{
        console.log("DB Connected.........");
    }).catch((err)=>{
        console.log("DB Connection Failed.........");
    })

sequelize
    .sync({alter:true})
    .then(()=>{
        console.log('DB tables synced');
    }).catch(err=> console.log("ERROR SYNCING TABLES",err));

app.get('/',(req,res)=>{
    res.send("HEYY")
})

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})