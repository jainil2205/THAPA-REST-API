const mongoose=require('mongoose');
// uri="mongodb+srv://jainildoshi2205:OOv9CCHOl0Imk8WF@cluster0.nsdr1.mongodb.net/JainillAPI?retryWrites=true&w=majority&appName=Cluster0"

const connectDB=(uri)=>{
    console.log("connect DB");
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
}

module.exports=connectDB