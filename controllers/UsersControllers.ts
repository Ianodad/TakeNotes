import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../lib/prisma";


const createUser = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, password } = req.body;
    
    const user = await prisma.user.create({
        data: {
        name,
        email,
        password,
        },
    });
    
    res.status(201).json({
        status: "success",
        data: {
        user,
        },
    });
})