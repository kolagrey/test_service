const userRouter = require('express').Router();
const userHandler = require('./user.handler');

userRouter.post('/v1/user', userHandler.createUserHandler);
userRouter.get('/v1/users', userHandler.getUsersHandler);
userRouter.get('/v1/user/:id', userHandler.getUserHandler);
userRouter.patch('/v1/user/:id', userHandler.updateUserHandler);
userRouter.delete('/v1/user/:id', userHandler.removeUserHandler);

module.exports = userRouter;