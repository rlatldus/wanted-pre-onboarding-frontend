# wanted-pre-onboarding-frontend

# 원티드 프리온보딩 프론트엔드 - 선발 과제

이 레파지토리는 원티드 프리온보딩 프론트엔드 과정 선발 과제 안내 및 과제 제출을 위해 만들어졌습니다.

## 안내 사항

- 지원자의 성명 : 김시연
- 프로젝트의 실행 방법 :
- 데모 영상:

# TodoList
## 배포 URL

**<https://rlatldus.github.io/wanted-pre-onboarding-frontend/>**

<br>


## 프로젝트 설명

프론트엔드 과정 선발 과제는 React를 사용하여 간단한 로그인 기능과 TodoList 기능을 구현하는 프론트엔드 기초 개발 능력으로 styled component를 사용하였습니다. UI는 편안한 warmcolor를 사용하였습니다.

<br>

### :: 1. 로그인 / 회원가입

- `/signup` 경로에 회원가입 기능을 개발해주세요
- `/signin` 경로에 로그인 기능을 개발해주세요
- 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요

  - 이메일 input에 `data-testid="email-input"` 속성을 부여해주세요
  - 패스워드 input에 `data-testid="password-input"` 속성을 부여해주세요
  - 회원가입 페이지에는 회원가입 button에 `data-testid="signup-button"` 속성을 부여해주세요
  - 로그인 페이지에는 로그인 button에 `data-testid="signin-button"` 속성을 부여해주세요

  ```html
  <!-- Form 컴포넌트 하나로 로그인과 로그아웃을 한번에 만들었습니다. -->
      <form>
        <Label handleChange={handleChange} email={userData.email} password={userData.password} />
        <Button primary data-testid={`${Authentication}-button`} disabled={!isAvailable} click={handleSubmit}>
          {children}
        </Button>
      </form>
  ```
  ```html
  <!-- email 과 password는 Label 컴포넌트로 만들었고,  data-testid 속성도 부여했습니다.-->

    <input
      type="email"
      name="email"
      tabIndex="1"
      data-testid="email-input"
      placeholder="이메일을 입력해주세요."
      value={email}
      onChange={handleChange}
  />
    <input
      type="password"
      name="password"
      tabIndex="2"
      minLength={8}
      placeholder="8자이상 입력해주세요."
      value={password}
      onChange={handleChange}
      data-testid="password-input"
  />
  ```

#### Assignment 1

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위, 비밀번호 확인 조건을 추가하는 행위 등은 지양해주세요)

  ```html
  <!-- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여-->

  useEffect(() => {
    setIsAvailable(userData.email.includes("@") && userData.password.length >= 8);
  }, [userData.email, userData.password]);

  <Button primary data-testid={`${Authentication}-button`} disabled={!isAvailable} click={handleSubmit}>
          {children}
        </Button>
  ```

#### Assignment 2

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요
- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요

navigate(navigation ); 로그인할때는 /todo로, 회원가입할때는 /sighin으로 가도록 만들었습니다.

#### Assignment 3


  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

  Authentication === "signin" && localStorage.setItem("access_token", response.data.access_token);
  navigate(navigation );

#### Assignment 4

- 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

---
util폴더 안에 AuthenticatedRoute.js와 PrivateRoute.js 로 나눠서 토큰이 있을 때와 없을 때 경로 를 다르게 리다이렉트 시켰습니다.


### :: 2. TODO LIST

#### Assignment 5

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- TODO는 `<li>` tag를 이용해 감싸주세요

```html

<ul></ul> 테그 안에 map을 사용하여 li를 나열했고, 아래와 같이 컴포넌트를 만들었습니다.
editingTodoIndex === 거짓
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
    <div className="buttonWrap">
      <button  data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
      </div>
  </label>
</li>
editingTodoIndex === 참
<li>
  <label>
    <input type="checkbox" />
    <input type="text" />
    <div className="buttonWrap">
      <button data-testid="submit-button">제출</button>
      <button  data-testid="cancel-button">취소</button>
      </div>
  </label>
</li>
```

#### Assignment 6

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요

  - TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여해주세요
  - TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여해주세요

    ```html
    <input data-testid="new-todo-input" />
    <button data-testid="new-todo-add-button">추가</button>
    ```

- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

#### Assignment 7

- TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

#### Assignment 8

- TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

  - 수정 버튼에는 `data-testid="modify-button"` 속성을 부여해주세요
  - 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여해주세요


#### Assignment 9

- 투두 리스트의 삭제 기능을 구현해주세요

  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

#### Assignment 10

- 투두 리스트의 수정 기능을 구현해주세요

  - TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
  - 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
    - 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요
  - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
    - 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요
    - 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
  - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

    ```html
    <input data-testid="modify-input" />
    <button data-testid="submit-button">제출</button>
    <button data-testid="cancel-button">취소</button>

## 스크린 샷 및 GIF
