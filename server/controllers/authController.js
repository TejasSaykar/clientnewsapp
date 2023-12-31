import userModel from "../models/userModel.js";

export const SignUpController = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        switch (true) {
            case !name: return res.status(401).send({ message: "Name is required!" });
            case !email: return res.status(401).send({ message: "Email is required !" });
            case !password: return res.status(401).send({ message: "Password is required!" });
            case !phone: return res.status(401).send({ message: "Phone is required!" })
        }

        // Check existing user
        // const existUser = await userModel.findOne({ email });
        // if (existUser) {
        //     res.status(401).send({
        //         success: false,
        //         message: "Already register please Signin"
        //     });
        // }

        // Save user
        const user = await new userModel({
            name, email, password, phone
        }).save();
        res.status(201).send({
            success: true,
            message: "SignUp successful",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            message: "Error while signup",
            error
        })
    }
}

export const SingInController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) res.status(401).send({
            success: false,
            message: "Invalid email or password"
        });

        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(401).send({
                success: false,
                message: "Email is not register"
            });
        }

        const checkPass = req.body.password
        const match = await userModel.findOne({ password: checkPass });
        if (!match) {
            res.status(401).json({
                success: false,
                message: "Invlaid password"
            });
        }

        res.status(201).json({
            success: true,
            message: "SignIn succssful",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: "Error while SignIn",
            error
        })
    }
}

export const getAllUserController = async (req, res) => {
    try {
        const users = await userModel.find({});
        if (!users) {
            return res.status(401).send({
                success: false,
                message: "User not found"
            });
        }
        res.status(201).send({
            userCount: users.length,
            success: true,
            message: "Getting all users",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting users",
            error
        })
    }
}