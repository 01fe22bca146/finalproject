const bcrypt=require('bcryptjs');
const Users =[
    {name:'admin', email:'admin@gmail.com',password:bcrypt.hashSync('123456',10),isAdmin:true},
    {name:'nayeempatwegar', email:'Nayeempatwegar@gmail.com',password:bcrypt.hashSync('Nayeem@123',10)},
    {name:'user', email:'user@gmail.com',password:bcrypt.hashSync('user@123',10)}

]
module.exports = Users;