import userModel from "../models/AuthModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userMode from "../models/AuthModel.js";

export const registerService = async (UserName, UserEmail, UserPassword) => {

    // Check existing email
    const check = await userMode.findOne({ UserEmail });

    if (check) {
        throw {
            status: 409,
            message: "Email Already Exists"
        };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(UserPassword, 10);

    // Save user
    const newUser = await userMode.create({
        UserName,
        UserEmail,
        UserPassword: hashedPassword
    });

    return {
        id: newUser._id,
        name: newUser.UserName,
        email: newUser.UserEmail
    };
};


export const loginService = async (UserEmail, UserPassword) => {

    // Find user
    const user = await userMode.findOne({ UserEmail });

    if (!user) {
        throw {
            status: 401,
            message: "Invalid Email or Password"
        };
    }

    // Compare password
    const isMatch = await bcrypt.compare(
        UserPassword,
        user.UserPassword
    );

    if (!isMatch) {
        throw {
            status: 401,
            message: "Invalid Email or Password"
        };
    }

    // Generate access token
    const token = jwt.sign(
        {
            id: user._id,
            name: user.UserName
        },
        process.env.ACCESS_SECRET,
        { expiresIn: "1h" }
    );

    return {
        token,
        name: user.UserName,
        email: user.UserEmail
    };
};

export const dashboardService = async (userId) => {

    const user = await userMode
        .findById(userId)
        .select("-UserPassword");

    if (!user) {
        throw {
            status: 404,
            message: "User Not Found"
        };
    }

    return user;
};