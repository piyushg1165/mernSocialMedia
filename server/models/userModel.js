const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

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
    gender:{
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
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

// userSchema.pre("save" , async function (next) {
//     const user = this;
//     if(!user.isModified()) return next();
//     try{
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hashPassword(user.password, salt);
//         user.password =  hashedPassword;
//         next();
//     }
//     catch(error){
//         return next(error);
//     }

// });

const User = mongoose.model("User", userSchema);

module.exports = User;