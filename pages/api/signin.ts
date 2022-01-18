import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import cookies from "cookies";
import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
    const salt = bcrypt.genSaltSync();
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(
            { email: user.email, id: user.id, time: Date.now() },
            "hello",
            {
                expiresIn: "8h",
            }
        );
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("KM_ACCESS_TOKEN", token, {
                httpOnly: true,
                maxAge: 8 * 60 * 60,
                path: "/",
                sameSite: "lax",
                secure: process.env.NODE_ENV === "production",
            })
        );
        res.json({ user })
    }

};

export default signin;
