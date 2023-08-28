const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      minlength: [5, 'Username is too short']
    },
    password: {
      type: String,
    },
    firstname: {
      type: String,
      required: [true, 'Firstname is required'],
    },
    lastname: {
      type: String,
      required: [true, 'Lastname is required'],
    },
    icon: {
      type: String,
      default: '#'
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
