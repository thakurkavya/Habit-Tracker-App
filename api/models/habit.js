const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true,
    },
    repeatMode:{
        type:String,
        enum:["daily","weekly"],
        default:"daily"
    },
    reminder:{
        type:Boolean,
        default:false,
    },
    completed:{
        type:Object,
        default:{}
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Habit = mongoose.model("Habit",habitSchema); //The model serves as an interface to interact with the "habits" collection in the MongoDB database.

module.exports = Habit