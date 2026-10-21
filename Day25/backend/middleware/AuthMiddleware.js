import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                msg: "Authorization header missing or invalid"
            });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                msg: "Token Missing"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.ACCESS_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        if (
            error.name === "TokenExpiredError" ||
            error.name === "JsonWebTokenError" ||
            error.name === "NotBeforeError"
        ) {
            return res.status(401).json({
                msg: "Invalid or expired token"
            });
        }

        next(error);
    }
};