const Label = ({ handleChange, email, password }) => {
  return (
    <>
      <label htmlFor="emailInput">
        이메일
        <input
          type="email"
          name="email"
          tabIndex="1"
          data-testid="email-input"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="passwordInput">
        비밀번호
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
      </label>
    </>
  );
};

export { Label };
