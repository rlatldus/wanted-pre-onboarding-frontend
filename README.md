# 원티드 프리온보딩 프론트엔드 - 6월 선발 과제

# TODO 투두리스트
오늘의 할일을 메모 생성하고 추가, 수정, 삭제 가능한 메모 기능 앱 <br />
- **`Project duration` :** 2023.06.11 - 2023.06.16
- **`Team members` :** 김시연
- **`Link` :** [TODO 투두리스트 방문하기👀](https://rlatldus.github.io/wanted-pre-onboarding-frontend/)

![image](https://github.com/rlatldus/wanted-pre-onboarding-frontend/assets/122216298/0b72fadc-3582-40d8-afd1-32698b4c9326)



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

### 느낀점

commit message를 [경로 문제해걸 >> 어떤 부분의 경로 문제 해결]이런 식으로 더 자세히 작성해야 겠다고 다짐했다.
줄일 수 있는 porps가 많고, children을 props로 전달할 때 children={children}으로 작성하는 등 좀 아쉬운 부분이 많았다. 또한 styled component를 "."으로 만든 후 다른 폴더로 빼지 못한 부분도 아쉬운 프로젝트가 된 것 같다.

장했다고 생각한 부분은 util 파일에 Route를 AuthenticatedRoute와 PrivateRoute로 나눠서 코드를 작성해서 토큰이 있으면 todo로 바로 이동하고 토큰이 없으면 todo페이지 접근을 차단하고 signin 페이지로 이동하게 만든 부분은 코드도 줄일 수 있고 사용하기 편하게 만든 듯 하다.

또한 form 컴포넌트로 signin과 signup을 한번에 작성한 부분(usehookform이 아닌게 아쉽지만)도 잘한 점이라고 생각한다.
