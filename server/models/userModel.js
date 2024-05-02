const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    bio:{
        type: String,
        required: true
    },

    profilePic:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    password: {
        required: true,
        type: String,
        select: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
}
);

const User = mongoose.model("User", userSchema);

module.exports = User;