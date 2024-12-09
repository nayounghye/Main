let users = `angmond//1234//앙몬드
scapy//4321//스카피
jordy//5678//죠르디`;
//map은 배열의 모든 요소를 순회하며 각 요소에 주어진 함수
// 적용한 결과로 새로운 배열을 반환한다.
exports.userInfo = (userid, userpw) => {
  const userArray = users.split(`\n`).map((user) => {
    const [id, pw, name] = user.split('//');
    return { id, pw, name };
  });
  // users.split('\n')
  //: users 문자열을 개행 문자(\n) 기준으로 분리하여 배열로 변환.
  // .map((user) => {...})
  //  : 분리된 각 유저 정보 문자열에 대해 함수를 실행하여 {id, pw, name} 형태의 객체로 변환.

  // 위 함수를 밖에서 쓸 수 있도록 return을 해줘야 한다.
  return userArray.find((user) => user.id === userid && user.pw === userpw);
};
// find : 주어진 판별 함수를 만족하는 배열의 첫 번째 요소를 반환.
// 만족하는 요소가 없으면 undefined를 반환.
