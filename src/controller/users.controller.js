const userService = require("../service/user.service")
const usersController={
    get:(req,res,next)=>{
        let userId = req.params.userId;
    userService.get(userId,(error,users)=>{
        if(error) next (error);
        if (users) { 
        res.render('users/users', {users:users});
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