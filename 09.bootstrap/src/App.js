// App.js
import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const toggleLoginForm = () => {
    setShowSignUpForm(false);
    setShowLoginForm(!showLoginForm);
  };

  const toggleSignUpForm = () => {
    setShowLoginForm(false);
    setShowSignUpForm(!showSignUpForm);
  };

  const onCloseForms = () => {
    setShowLoginForm(false);
    setShowSignUpForm(false);
  };

  return (
    <div className="App">
      <Header
        showLoginForm={showLoginForm}
        showSignUpForm={showSignUpForm}
        onLoginClick={toggleLoginForm}
        onSignUpClick={toggleSignUpForm}
        onCloseForms={onCloseForms}
      />
      <section>
        <img src={logo} className='App-logo' alt='logo'/>
        <div>
          <h1>환영합니다!</h1>
          {showLoginForm && (
            <div className='login-form'>
              <input placeholder="id" />
              <input type="password" placeholder="password" />
              <button>로그인</button>
            </div>
          )}
          {showSignUpForm && (
            <div className='signup-form'>
              <input placeholder="이름" />
              <input placeholder="나이" />
              <input placeholder="id" />
              <input type="password" placeholder="password" />
              <button>회원가입</button>
            </div>
          )}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
