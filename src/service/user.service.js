const usersDao = require("../dao/users.dao");

const userService={
    get:(userId,callback)=>{
usersDao.get(userId,(error,users)=>{
    if(error) return callback(error,undefined);
    if(users) return callback(undefined,users);
});
    },
};

module.exports = userService;