async function createUser(Model, { name, dateOfBirth, location }) {
    const newUser = Model({
        name,
        dateOfBirth,
        location
    });
    try {
        return await newUser.save();
    } catch (error) {
        return { hasError: true, error };
    }

}

async function updateUser(Model, condition, updateOptions) {

    try {
        return await Model.updateOne(condition, updateOptions);
    } catch (error) {
        return { hasError: true, error };
    }

}


async function getUsers(Model) {

    try {
        return await Model.find({});
    } catch (error) {
        return { hasError: true, error };
    }

}


async function getUser(Model, target) {

    try {
        return await Model.findOne(target);
    } catch (error) {
        return { hasError: true, error };
    }

}

async function removeUser(Model, condition) {

    try {
        return await Model.findOneAndDelete(condition);
    } catch (error) {
        return { hasError: true, error };
    }

}

module.exports = {
    createUser,
    updateUser,
    getUsers,
    getUser,
    removeUser
}

