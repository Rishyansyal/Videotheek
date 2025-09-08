import { logger } from "../util/logger";

const userService = require("../service/user.service")
const usersController={
    get:(req,res,next)=>{
        let userId = req.params.userId;
    userService.get(userId,(error,users)=>{
        if(error) next (error);
        if (users) { 
            logger.debug(user)
            userId == undefined
            ? res.render('users/table', {users:users})
            : res.render('users/details', {users:users[0]}); // krijgt id van die localhost:xxxx/user <-- id wordt ervan meegegeven


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
    
    post:(req,res,next)=>{
        let user = req.body;
    userService.post(user,(error,result)=>{
        if(error) next (error);
    if (result) { 
            res.render('users/users', {users: users});
        }
    });
    },
    put:(req,res,next)=>{
        let userId = req.params.userId;
        let user = req.body;
    userService.put(userId,user,(error,result)=>{
        if(error) next (error);
    if (result) { 
            res.render('users/users', {users: users});
        }
    });
    },
    
};


module.exports = usersController