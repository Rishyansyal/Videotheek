const userService = require("../service/user.service")
const logger = require('../util/logger');
const usersController={
     get:(req,res,next)=>{
        let userId = req.params.userId;
    userService.get(userId,(error,users)=>{
        if(error) next (error);
        if (users) { 
            userId == undefined
            ? res.render('users/table', {users:users})
            : res.render('users/details', {user:users[0]}); // krijgt id van die localhost:xxxx/user <-- id wordt ervan meegegeven
    }
    })
    },
    update:(req,res,next)=>{
        let userId = req.params.userId;
        req.method ==="GET"
         userService.get(userId,(error, users)=>{
            if(error) next (error);
            if (users) {
            userId == undefined
            ? res.render("users/table",{users:users})
            : res.render("users/edit",{user:users[0]}); // krijgt id van die localhost:xxxx/user <-- id wordt ervan meegegeven
            
        }
    })
    },

    delete:(req,res,next)=>{
        let userId = req.parms.userId
        userService.delete(userId,(error,result)=>{
            if(error) next (error);
            if (result){
                res.render("users/users",{users:users})
            }
        })
    },
    
    
};


module.exports = usersController