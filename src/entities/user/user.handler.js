const User = require('./user.model');
const { createUser, updateUser, getUser, getUsers, removeUser } = require('./user.method');

const userHandler = {
    createUserHandler: async (req, res, next) => {
        // Extract payload from request body
        const { name, dob, location } = req.body;

        // date conversion using the dob object, expects object keys to be of type Number
        // NOTE: This is loosely validated for demo purposes
        const dateOfBirth = new Date(dob.year, (dob.month - 1), (dob.day + 1));

        // Just basic validation, nothing extensive

        if (name || dateOfBirth || location) {
            try {
                const newUser = await createUser(User, { name, dateOfBirth, location });

                if (newUser.hasError) {
                    res.status(400).json({
                        message: 'User not created',
                        error: newUser.error
                    });
                } else {
                    res.status(201).json({
                        message: 'User created successfully',
                        data: newUser,
                        request: {
                            type: req.method,
                            url: `${req.url}`
                        }
                    });
                }

            } catch (error) {
                req.customError = error;
                next();
            }

        } else {
            res.status(400).json({
                message: 'Invalid payload',
                payload: req.body
            });
        }
    },

    getUsersHandler: async (req, res, next) => {
        try {
            const users = await getUsers(User);
            if (users.hasError) {
                res.status(400).json({
                    message: 'Users not found',
                    error: users.error
                });
            } else {
                res.status(200).json({
                    data: users,
                    request: {
                        type: req.method,
                        url: `${req.url}`
                    }
                });
            }

        } catch (error) {
            req.customError = error;
            next();
        }
    },

    getUserHandler: async (req, res, next) => {
        // Extract id from request params
        const { id } = req.params;
        // Just basic validation, nothing extensive 
        if (id) {
            try {
                const user = await getUser(User, { _id: id });
                if (user.hasError) {
                    res.status(400).json({
                        message: 'User not found',
                        error: user.error
                    });
                } else {
                    res.status(200).json({
                        data: user,
                        request: {
                            type: req.method,
                            url: `${req.url}`
                        }
                    });
                }

            } catch (error) {
                req.customError = error;
                next();
            }

        } else {
            res.status(400).json({
                message: 'Invalid payload'
            });
        }
    },

    updateUserHandler: async (req, res, next) => {
        // Extract payload from request body & params
        const { name, dob, location } = req.body;
        const { id } = req.params;

        // date conversion using the dob object, expects object keys to be of type Number
        // NOTE: This is loosely validated for demo purposes
        const dateOfBirth = new Date(dob.year, (dob.month - 1), (dob.day + 1));

        // Just basic validation, nothing extensive 
        // Todo: Check if the use exist before updating 
        if (id || name || dateOfBirth || location) {
            try {
                const updateResponse = await updateUser(User, { _id: id }, { name, dateOfBirth, location });
                if (updateResponse.hasError) {
                    res.status(400).json({
                        message: 'User not updated',
                        error: updateResponse
                    });
                } else {
                    res.status(204).json({
                        message: 'User updated successfully',
                        request: {
                            type: req.method,
                            url: `${req.url}`
                        }
                    });
                }

            } catch (error) {
                req.customError = error;
                next();
            }

        } else {
            res.status(400).json({
                message: 'Invalid payload'
            });
        }
    },

    removeUserHandler: async (req, res, next) => {
        // Extract id from request params
        const { id } = req.params;

        // Just basic validation, nothing extensive 
        // Todo: Check if the use exist before deleting 
        if (id) {
            try {
                await removeUser(User, { _id: id });
                res.status(202).json({
                    message: 'User deleted successfully'
                });
            } catch (error) {
                req.customError = error;
                next();
            }

        } else {
            res.status(400).json({
                message: 'Invalid payload'
            });
        }
    }
}

module.exports = userHandler;