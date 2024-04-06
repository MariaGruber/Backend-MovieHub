import { Request, Response } from "express"

export const getAllUsers = (req:Request, res:Response) => {
    res.send("all users")
}

export const createUsers = (req:Request, res:Response) => {
    res.send("user created")
}

export const modifyUser = (req:Request, res:Response) => {
    res.send("user modified")
}

export const deleteUsers = (req:Request, res:Response) => {
    console.log(req.params)
    res.send("user deleted")
}

