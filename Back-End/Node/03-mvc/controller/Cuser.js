// controller 부분은 function 을 다 여기에 담는다.
// User에는 userInfo 라는 함수가 존재 'User  = {userInfo: ()=>{}}
const User = require('../model/User');

// 1. router 분리 (요청을 정의) -> routes파일에 정리 - 완료
// 2. controller 분리 (들어온 요청에 대해 데이터 처리, view를 render 등을 담당, client에 응답하는 역할을 함.)
// function 부분은 다 controller에 들어간다.

//  function (req, res) {
//   res.render('index');
// });
// 위 코드를 아래처럼 변경
exports.main = (req, res) => {
  res.render('index');
};

// function (req, res) {
//   const id = 'jordy';
//   const pw = '12345';
//   let data;
//   if (req.body.userid == id && req.body.password == pw) {
//     data = {
//       isSuccess: true,
//       msg: '로그인 성공!',
//     };
//   } else {
//     data = {
//       isSuccess: false,
//       msg: '로그인 실패!',
//     };
//   }
//   // console.log(req.body);
//   res.send(data);
// });
// 위 코드를 아래처럼 변경
exports.login = (req, res) => {
  const userData = User.userInfo(req.body.userid, req.body.userpw);
  console.log(userData);
  let data;
  if (userData) {
    data = {
      isSuccess: true,
      msg: `${userData.name}님 환영합니다!`,
    };
  } else {
    data = {
      isSuccess: false,
      msg: '아이디 또는 비밀번호를 잘못 입력했습니다.',
    };
  }
  res.send(data);
};
