import { Request, Response } from "express"
import UserModel from "../models/user.models"
import prisma from "../db/client"

export const getAllUsers = async (req:Request, res:Response) => {
    try { const allUsers = await UserModel.find().populate("movies")
        res.status(200).send(allUsers)
        
    } catch (error) {
        res.status(400).send(error)
    }
}

export const createUsers = async (req:Request, res:Response) => {
    const { name, email, password } = req.body
    try {
        const newUser = await prisma.user.create({ 
            data:{ name, email, password}})
        res.status(201).send(newUser)    
    } catch (error) {
        res.status(404).send(error)

    }
}

export const modifyUser = async (req:Request, res:Response) => {
    const { name, email, password } = req.body
    const { userId } = req.params

    try {
        const userUpdate = await UserModel.findByIdAndUpdate(
            {_id:userId}, 
            {name, email, password}, 
            {new:true}
            )
        res.status(200).send(userUpdate)        
    } catch (error) {
        res.status(400).send(error)
    }
}

export const deleteUsers = async (req:Request, res:Response) => {
    const { userId } = req.params

    try {
        const userDeleted = await UserModel.findByIdAndDelete({_id:userId})
        res.status(200).send(userDeleted)

    } catch (error) {
        res.status(400).send(error)
    }
}

