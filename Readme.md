# Test Service API

## How to use this repo

### Clone the file using

```sh

git clone https://github.com/kolagrey/test_service

```

### Install dependencies using

```sh

npm install 

```

### Start the server using 

```sh
    
    npm start

```

This will start the server at http://localhost:3000

## Available Routes

- [POST] http://localhost:3000/v1/user --> Create new user.
```sh

    // Example body payload

    { 
        "name": "Bisola Adams", 
        "dob": {
            "year": 1989, 
            "month": 9, 
            "day": 11
        }, 
        "location": "Lagos, Nigeria"
    }

    // Returned payload

    HTTP Status: 201

    {
        "message": "User created successfully",
        "data": {
            "_id": "5d77e850f35d0a11e80b9004",
            "name": "Bisola Adams",
            "dateOfBirth": "1989-09-10T23:00:00.000Z",
            "location": "Lagos, Nigeria",
            "__v": 0
        },
        "request": {
            "type": "POST",
            "url": "/v1/user"
        }
    }




    
```
- [GET] http://localhost:3000/v1/users --> Get all users
- [GET] http://localhost:3000/v1/user/:id --> Get user with the provided id
- [PATCH] http://localhost:3000/v1/user/:id --> Update user with the rovided id. 
```sh

    //Expects :id to be the _id field of this document
    // See below for example

    http://localhost:3000/v1/user/5d77e850f35d0a11e80b9004

    // Example body payload

   { 
        "name": "Bisola Nneka Adams", 
        "dob": {
            "year": 1989, 
            "month": 9, 
            "day": 11
        }, 
        "location": "Abuja, Nigeria"
    }

```
- [DELETE] http://localhost:3000/v1/user/:id --> Delete's user with the provided id