import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: false,
      default: ''
    }, 
    attachment: String,
    likeCount: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export const PostModel = mongoose.model('Post', schema);
