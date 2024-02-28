// import './App.css';
// 1. style파일을 별도 지정할 때

// function App() {

//   // 2. style을 변수에 객체로 저장하여 지정
//   const style = {
//     // 카멜표기법 사용
//     App : {
//       backgroundColor : 'yellow',
//       padding : '50px',
//       textAlign : 'center',
//       fontSize : '30px'
//     },
//     h1 : {
//       color : "red"
//     },
//     class1: {
//       color : "#FF00DD"
//     },
//     id2 : {
//       color : "blue",
//       backgroundColor : "white"
//     }
//   }
//   return (
//     <div style={style.App}>
//       <h1 style={style.h1}>AddInEdu에 오신것을 환영합니다</h1>
//       <h3>엘라스틱서치로그 빅데이터 분석 및 시각화 개발자 양성과정</h3>
//       <p style={style.class1}>react의 style적용하기</p>
//       <p style={style.id2}>id로 style적용하기</p>
//     </div>
//   );
// }


// 3. inline방식으로 style 주기
function App() {
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'red'}}>AddInEdu에 오신것을 환영합니다</h1>
      <h3 style={{color:'blue', backgroundColor:'yellow'}}>엘라스틱서치로그 빅데이터 분석 및 시각화 개발자 양성과정</h3>
      <p>react의 style적용하기</p>
      <p>id로 style적용하기</p>
    </div>
  );
}

export default App;
