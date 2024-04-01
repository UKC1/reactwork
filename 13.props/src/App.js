import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';

/*  1. 변수에 담긴값 넘기기
function App() {
  // const name = "박미영";
  const addr = "금천구 가산동";

  return (
    <div className="App">
      <Header />
      <Body user={"박미영"} addr ={addr} />
      <Footer />
    </div>
  );
} 
*/

// 객체형태를 넘기기
/*
function App() {
  const userInfo = {
    name : "박미영",
    addr : "금천구 가산동",
    // likeList : ["캐릭터","만화","웹툰"]
  };

  return (
    <div className="App">
      <Header />
      //  <Body {...userInfo} /> 
      <Body userInfo={userInfo} />
      <Footer />
    </div>
  );
} 
*/

// 3.
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
} 

export default App;
