function Header({ onLoginClick, onSignUpClick, showLoginForm, showSignUpForm, onCloseForms }) {
    return (
      <div className="header">
        <h1>Header</h1>
        <div className="buttonForm">
          {(showLoginForm || showSignUpForm) && (
            <>
              {showLoginForm && <button onClick={onSignUpClick}>회원가입</button>}
              {showSignUpForm && <button onClick={onLoginClick}>로그인</button>}
              <button onClick={onCloseForms}>돌아가기</button>
            </>
          )}
          {!showLoginForm && !showSignUpForm && (
            <>
              <button onClick={onLoginClick}>로그인</button>
              <button onClick={onSignUpClick}>회원가입</button>
            </>
          )}
        </div>
      </div>
    );
  }
  
  export default Header;
  