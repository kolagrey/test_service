# Test Service API

## How to use this file

### Clone the file using

`

git clone https://github.com/kolagrey/test-service

`

### Install dependencies using

`
npm install 

`

### Start the server using 

`
    npm start
`

This will start the server at http://localhost:3000

## Available Routes

- [POST] http://localhost:3000/user --> Create new user
- [GET] http://localhost:3000/users --> Get all users
- [GET] http://localhost:3000/user/:id --> Get user with the provided id
- [PATCH] http://localhost:3000/user/:id --> Update user with the rovided id. Expects body to be an object 
`
    { 
        name: String, 
        dob: {
            year: Number, 
            month: Number, 
            day: Number
        }, 
        location: String
    }
`
- [DELETE] http://localhost:3000/user/:id --> Delete's user with the provided id