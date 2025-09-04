const userService = require("../service/user.service")
const usersController={
    get:(req,res,next)=>{
        let userId = req.params.userId;
    userService.get(userId,(error,users)=>{
        if(error) next (error);
    if (users)  res.render('index', { title: 'Express' });
    })
    },
    

};
module.exports = usersController