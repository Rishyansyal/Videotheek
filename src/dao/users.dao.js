const data = require("../db/sql/example.data")
const usersDao ={
get:(userId,callback)=>{

    if(userId === undefined){
        return callback(undefined,data)
    }
    else{
        let user = data.filter(user=> user.id == userId)[0] 
        return callback(undefined,user)
    }
},
};

module.exports = usersDao;