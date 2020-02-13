const { users } = require('../../models');

module.exports = {
  get: (req, res) => {
    // TODO : 유저의 session을 이용하여, 데이터베이스에 있는 정보를 제공하도록 구현하세요.
    // 세션이 없을 때
    if(req.session.userId===undefined){
      res.status(401).send('need user session')
    }else{ // 세션이 있을 떄
    // 1. 리퀘스트에 담긴 정보에 세션아이디를 확인한다?
    users.findAll({where:{
      id: req.session.userId
    }}).then(result => {
      
      //console.log(result[0].dataValues)
      res.send(result[0].dataValues)
    })
    // 2. 세션정보에 알맞은 정보를 디비에서 찾아서 보내준다?
    }

    
  }
};
