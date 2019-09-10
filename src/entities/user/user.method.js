async function createUser(Model, { name, dateOfBirth, location }) {
    const newUser = Model({
        name,
        dateOfBirth,
        location
    });
    try {
        return await newUser.save();
    } catch (error) {
        return { error, hasError: true };
    }

}

async function updateUser(Model, condition, updateOptions) {

    try {
        return await Model.updateOne(condition, updateOptions);
    } catch (error) {
        return { error, hasError: true };
    }

}


async function getUsers(Model) {

    try {
        return await Model.find({});
    } catch (error) {
        return { error, hasError: true };
    }

}


async function getUser(Model, target) {

    try {
        return await Model.findOne(target);
    } catch (error) {
        return { error, hasError: true };
    }

}

async function removeUser(Model, condition) {

    try {
        return await Model.findOneAndDelete(condition);
    } catch (error) {
        return { error, hasError: true };
    }

}

module.exports = {
    createUser,
    updateUser,
    getUsers,
    getUser,
    removeUser
}

