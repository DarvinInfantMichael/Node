import {
    registerService,
    loginService
} from "../services/authService.js";


export const Registeration = async (req, res) => {

    try {

        const { UserName, UserEmail, UserPassword } = req.body;

        if (!UserName || !UserEmail || !UserPassword) {
            return res.status(400).json({
                msg: "All fields required"
            });
        }

        const result = await registerService(
            UserName,
            UserEmail,
            UserPassword
        );

        return res.status(201).json({
            msg: "Registration Successful",
            user: result
        });

    } catch (error) {

        return res.status(error.status || 500).json({
            msg: error.status ? error.message : "Server Error"
        });

    }
};


export const Login = async (req, res) => {

    try {

        const { UserEmail, UserPassword } = req.body;

        if (!UserEmail || !UserPassword) {
            return res.status(400).json({
                msg: "All fields required"
            });
        }

        const result = await loginService(
            UserEmail,
            UserPassword
        );

        return res.status(200).json({
            msg: "Login Successful",
            data: result
        });

    } catch (error) {

        return res.status(error.status || 500).json({
            msg: error.status ? error.message : "Server Error"
        });

    }
};

export const Dashboard = async (req, res) => {

    try {

        return res.status(200).json({
            msg: "Welcome to Dashboard",
            user: req.user
        });

    } catch (error) {

        return res.status(500).json({
            msg: "Server Error"
        });
    }
};