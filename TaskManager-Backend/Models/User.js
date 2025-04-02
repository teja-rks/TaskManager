import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define User Schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,  // Fixed: "String" should be uppercase
            required: [true, "Name is Required"],
        },
        email: {
            type: String,  // Fixed: "String" should be uppercase
            required: [true, "Email is Required"],
            unique: true,
        },
        password: {
            type: String,  // Fixed: "String" should be uppercase
            required: [true, "Password is Required"],
        },
    },
    { timestamps: true }
);

// Hash password before saving user
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Create User Model
const User = mongoose.model("User", userSchema);
export default User;
