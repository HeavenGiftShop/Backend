const bcrypt =require ("bcrypt");

const users = [
    {
        name:"Admin",
        email: "admin@gmail.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin: true,
    },
    {
        name:"User",
        email: "user@gmail.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin: false,

    },
];
module.export=users;