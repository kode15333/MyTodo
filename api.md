설명 |HTTP Method |  URL | 파라미터 
|:----:|:----:|:---|:----|
회원관리 api|
회원가입 |  POST    | api/user          | userid, userpw, nickname
정보수정 |  PATCH   | api/user          | nickname
로그인   |  POST    | api/user/join     | userid, userpw
로그아웃 |  GET     | api/user          | 
TODOLIST api|
리스트|GET| api/board|userid
글 쓰기|POST| api/board|userid, title, content, state
글 로딩|GET|api/board/:postid | |
글 수정|PATCH| api/board/:postid | title, content, state, postid
글 삭제|DELETE| api/board/:postid | postid