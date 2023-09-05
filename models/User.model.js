const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Firstname is required'],
    },
    lastname: {
      type: String,
      required: [true, 'Lastname is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },

    chest: {
      type: Number,
    },

    squad: {
      type: Number,
    },

    routine: {
      type: String
    },

    weigth: {
      type: Number,
    },

    password: {
      type: String,
    },
    avatar: {
      type: String,
      default: 'https://res.cloudinary.com/daqyvggzm/image/upload/v1693861204/hhrqpvubpdk4ykj6s3ec.png'
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER', 'TRAINER'],
      default: 'USER'
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
