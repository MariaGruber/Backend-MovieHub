import { Router } from 'express'
import { createUsers, deleteUsers, getAllUsers, modifyUser } from "../controllers/user.controllers"

const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.post('/', createUsers)
userRouter.patch('/', modifyUser)
userRouter.delete('/:userId', deleteUsers)

export default userRouter