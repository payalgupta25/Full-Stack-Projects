import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        text:{
            type:String,
            // required:true  //not required as we can have image only post
        },
        img:{
            type:String
        },
        likes:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                default:[]
            }
        ],
        comments:[
            {
                text:{
                    type:String,
                    required:true
                },
                commentedBy:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"User",
                    required:true
                }
            }
        ]
    },
    {
        timestamps:true
    }
);

const Post = mongoose.model('Post', postSchema);

export default Post;