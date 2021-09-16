const onlineUser = [];
const addUser = function(x) {
      if(x!=null && x!=undefined && !onlineUser.includes(x)) onlineUser.push(x);
     console.log(onlineUser)
}

const findUser = function(x) {

     return  onlineUser.includes(x);
}



module.exports = {
       addUser,
      findUser
}

