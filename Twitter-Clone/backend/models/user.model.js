import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase: true,
            trim: true,  //it will remove the extra spaces
            index: true //it will help in searching
        },

        fullName:{
            type:String,
            required:true,
            trim:true
        },

        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },

        password:{
            type:String,
            required:true,
            minLength:6
        },

        profileImg:{
            type:String,
            default:"https://res.cloudinary.com/dj7k9b8ps/image/upload/v1627967483/defaultProfilePic_qjvz0i.png"
        },

        coverImg:{
            type:String,
            default:"https://res.cloudinary.com/dj7k9b8ps/image/upload/v1627967483/defaultCoverPic_zq2k3o.png"
        },

        followers:[
            {
                type:mongoose.Schema.Types.ObjectId, 
                ref:"User",
                default:[] //by default no followers
            }
        ],

        following:[
            {
                type:mongoose.Schema.Types.ObjectId, 
                ref:"User",
                default:[] //by default no following
            }
        ],

        bio:{
            type:String,
            maxLength:100,
            default:""
        },

        link:{
            type:String,
            default:""
        },


    },
    {
        timestamps:true
    });

const User = mongoose.model("User",userSchema);

export default User;