'use strict';

const crypto = require('crypto');


module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};


// var shasum = crypto.createHash('sha1'); // shasum은 Hash 클래스의 인스턴스입니다.
// shasum.update('1'); // 해싱할 문자열을 여기에 넣는다
// var output = shasum.digest('hex');
// console.log(output)