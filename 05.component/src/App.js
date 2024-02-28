import './App.css';

const user = {
  firstName : "Hong",
  lastName : "GilDong"
};

function Student(user) {
  return user.firstName + " " + user.lastName;
}

function App() {
  const isStudent = true;
  return (
    <div className="App">
      <h1>Start React 2024_AddInEdu</h1>
      <h3>component 실습</h3>

      {isStudent? <h4>{Student(user)}님 환영합니다</h4> : <h4>학생이 아닙니다</h4>}   
      
      <Com1></Com1>
      <Com1/>
      <Com1/>

      {/* <div>
        <h2>[THIS IS COMPONENT]</h2>
        <p>고용노동부산업구조변화대응 특화훈련</p>
        <p>글자</p>
        <ul>
          <li>java</li>
          <li>oracle</li>
          <li>spring boot</li>
          <li>react</li>
        </ul>
      </div>

      <div>
        <h2>[THIS IS COMPONENT]</h2>
        <p>고용노동부산업구조변화대응 특화훈련</p>
        <p>글자</p>
        <ul>
          <li>java</li>
          <li>oracle</li>
          <li>spring boot</li>
          <li>react</li>
        </ul>
      </div>

      <div>
        <h2>[THIS IS COMPONENT]</h2>
        <p>고용노동부산업구조변화대응 특화훈련</p>
        <p>글자</p>
        <ul>
          <li>java</li>
          <li>oracle</li>
          <li>spring boot</li>
          <li>react</li>
        </ul>
      </div> */}
    </div>
  );
}

function Com1() {
  return (
    <div>
        <h2>[THIS IS COMPONENT]</h2>
        <p>고용노동부산업구조변화대응 특화훈련</p>
        <p>글자</p>
        <ul>
          <li>java</li>
          <li>oracle</li>
          <li>spring boot</li>
          <li>react</li>
        </ul>
      </div>
  );
}

export default App;
