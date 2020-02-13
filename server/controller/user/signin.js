const { users } = require('../../models');
// const crypto = require('crypto');
// const session = require('express-session');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    users.findAll({where:{email: req.body.email,
    password: req.body.password}}).then(result=>{ 
      // 아 세션에 이 사용자 정보를 객체로 저장하는구만

      // 저장이 안되어있을 때 result === []
      if(result.length===0){
        res.status(404).send("unvalid user")
      }else{
        // 한 아이디당 생성할 수 있는 세션을 제한하는 것이 나은가?
        // 세션을 주기 전에 이미 이 아이디로 생성된 세션이 있는지 확인하는 절차가 있으면 좋을까?
        // console.log(req.sessionID)
        req.session.userId = result[0].dataValues.id
      // console.log(req.session)
        res.send({id: result[0].dataValues.id});
      }
    })
  }
};
      // 세션아이디를 생성해서 (id를 해싱해서 만들었음)
      // var shasum = crypto.createHash('sha1'); // shasum은 Hash 클래스의 인스턴스입니다.
      // shasum.update(result[0].dataValues.id.toString()); // 해싱할 문자열을 여기에 넣는다
      // var output = shasum.digest('hex');
    //  console.log(output)
      //console.log(session)
