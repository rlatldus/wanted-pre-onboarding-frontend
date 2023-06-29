# 원티드 프리온보딩 프론트엔드 - 6월 선발 과제

## 이름
- 김시연

## 배포
- 링크 : **<https://rlatldus.github.io/wanted-pre-onboarding-frontend/>**

## git clone 후 실행방법
 ```zsh
 cd wanted-pre-onboarding-frontend
 $ npm install
 $ npm start
 ``` 

## 프로젝트 구조
```
📦 src
├── 📂 components
│   ├── 📄 TodoList.js
│   ├── 📄 button.js
│   ├── 📄 form.js
│   └── label.js
│
├── 📂 pages
|   ├── 📄 Main.js
|   ├── 📄 SignIn.js 
|   ├── 📄 SignUp.js
|   └── 📄 Todo.js
| 
└── 📂 util
     ├── 📄 AuthenticatedRoute.js
     └── 📄 PrivateRoute.js

```
## 데모영상 GIF

![todo](https://github.com/rlatldus/wanted-pre-onboarding-frontend/assets/122216298/51784876-f94c-477b-9fbe-db6d4b15db26)



## 사용 기술
- React
- Styled Components
- axios
- react-router-dom

<hr/>

### 화면 리스트 
:white_check_mark: router.tsx 생성   (router 추가 필요할 떄 마다 수정)   
:white_check_mark: "/" 에 UI 회원가입, 로그인 버튼 (배경 꾸미기??)   
:white_check_mark: "/signup" 회원가입 UI 화면   
- :white_check_mark: 이메일, 비밀번호 유호성 검사      
- :white_check_mark: 이메일, 비밀번호 유호성 검사 통과 못할시 버튼 disabled 부여         
- :white_check_mark: "/signup" 버튼 클릭 시 "/signin 이동      
- :white_check_mark: 회원가입 API 적용    
- :white_check_mark: localStorage에 값이 있으면 "/todo"로 이동    

<br>

:white_check_mark: "/signin" 로그인 UI 화면   
- :white_check_mark: 이메일, 비밀번호 유호성 검사      
- :white_check_mark: 이메일, 비밀번호 유호성 검사 통과 못할시 버튼 disabled 부여         
- :white_check_mark: "/signin" 버튼 클릭시 "/todo" 이동
- :white_check_mark: 로그인인 API 적용   
- :white_check_mark: JWT 로컬스토리지 저장   
- :white_check_mark: localStorage에 값이 있으면 "/todo"로 이동   

<br>

:white_check_mark: "/todo" 할일 목록 UI 화면
- :white_check_mark: localStorage에 값이 없으면 "/signin"로 이동
- :white_check_mark: 내용과 완료 여부 판다.
- :white_check_mark: 새로운 TODO 입력 가능한 input과 버튼 클릭
- :white_check_mark: 체크박스를 통한 완료 버튼
- :white_check_mark: 리스트에 수정, 삭제 버튼
- :white_check_mark: 삭제 기능 , 수정 기능, 완료 기능
- :white_check_mark: "/todo" 할일 목록 UI 화면

