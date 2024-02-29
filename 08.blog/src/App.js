import './App.css';
import {useState} from 'react';
import Modal from './Modal';

/*
  - map을 이용한 반복문 사용하기
  - props : 부모 -> 자식에게 state를 전송
  1. <자식컴포넌트 변수이름={state이름}>
  2. 자식 컴포넌트에서 파라미터 하나 추가하여 받는다

*/

function App() {
  // let title='이레구내식당';
  // let title=['이레구내식당', '영남집', '얌샘김밥'];
  // let [title] = useState(['이레구내식당', '영남집', '얌샘김밥']);

  let [title, setTitle] = useState(['스시', '이레구내식당', '영남집', '얌샘김밥']);
  let [modal, setModal] = useState(false);

  // 배열로 만들어 줌  
  let [like, setLike] = useState([0, 0, 0]);
  // let [num1, num2] = [3, 6];
  
  // 모달에 클릭한 제목이 들어가게하기위한 state
  let [newModalIdx, setNewModalIdx] = useState(0); // 0, 1, 2중에 하나가 들어가도록 해줌

  // input을 저장할 state
  let [inputValue, setInputValue] = useState('');

  // input을 저장할 state

  // map() 함수
  let arr = [3, 6, 8];
  arr.map(() => {
    // console.log(1);
  });

  [3,6,8].map((a) => {
    // console.log(a);
  });

  // 값을 받지 않으니 배열 길이만큼 리턴함
  let newArr = [2,7,9].map(() => {
    return '172638';
  });
  // console.log(newArr);

  let newArr2 = [2,7,9].map((b) => {
    return b * 2;
  });
  // console.log(newArr2);

  return (

    <div className="App">
      <h2 className='title1'>맛집 추천 Blog</h2>
      {/* <Restaurant/>
      <Restaurant/>
      <Restaurant/> */}
      {/* <button onClick={()=>{setTitle(['이향', '영남집', '김밥천국'])}}>글수정</button> */}
      
      {/* 복사하여 사용 */}

      {/* <button onClick={()=>{
        // let copy = title;
        let copy = [...title]; // 괄호를 벗겨내라 배열, 객체 등 새로운 것으로 만들어 반환 
        copy[0] = '김밥천국';
        setTitle(copy);        
      }}>글수정</button> */}

      {/* ...은 spread operator 문법 
        array나 object의 자료형의 왼쪽에 붙일 수 있다
        의미 : 괄호를 벗겨서 새로운 array나 object를 만들어서 반환
      */}
  
      {
        title.map((a, i) => {
          return (
            <div className="list" key={i}> 
            {/* Warning 에러가 발생해서 key 고유값을 넣어주면 해결됨 */}
              <h4 onClick={()=>{setModal(!modal); setNewModalIdx(i)}}>{title[i]}</h4> 
              {/* a 로해도 되고 title[i] 해도 됨! */}
              <p>2월 28일<span onClick={() => {
                let newLikes = [...like];
                newLikes[i] += 1;
                setLike(newLikes);
                // setLike(like[i]+1)
                }} className="span-left">🥇</span>{like[i]}</p>
                {/* 삭제 버튼 추가 */}
                <button onClick={()=> {
                  //  let copy = title.filter((_, index) => index !== i); // i번째 요소를 제외한 나머지 요소들로 구성된 새 배열 생성
                  let copy = [...title];
                  copy.splice(i, 1);
                  setTitle(copy);
                }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {  
        setInputValue(e.target.value); 
        console.log(inputValue);
      }}/>

      <button onClick={()=> {
        let copy = [...title];
        copy.unshift(inputValue);
        setTitle(copy);
      }}>글추가</button>



      {/* 동적 UI를 만드는 방법(모달창 만들기) 
      - 유저가 조작시 형태가 바뀌는 모달창, 탭, 서브메뉴, 툴팁, 경고문 등*/}

      {/* if 문 금지
        if(true) {
          <Modal/>
        }    */}
      {
        // modal ? <Modal2 color="pink" title={title}/> : null // modal == true과 동일
        /// 버튼을 클릭하면 첫번째 글제목을 '김밥천국'으로 바꾸기
        modal ? <Modal2 newModalIdx={newModalIdx} title={title} setTitle={setTitle}/> : null
        // title => ['이레구내식당', '영남집', '얌샘김밥']
        // modalTitle => [0, 1, 2]
      }

      {/* <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}

      {/* <div className='list'>
        <h4>{title[0]}</h4>
        <p>2월 28일<span onClick={() => {setLike(like+1)}} className='span-left'>🥇</span>{like}</p>
      </div>
      <div className='list'>
          <h4>{title[1]}</h4>
          <p>2월 28일<span className="span-left">🥇</span></p>
      </div>
      <div className='list'>
          <h4 onClick={()=>{setModal(!modal)}}>{title[2]}</h4>
          <p>2월 28일<span className="span-left">🥇</span></p>
      </div> */}
      
    </div>

/* const Modal2 = () => {
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}
 */
// function Restaurant() {
//   return (
//     <div className='list'>
//         <h4>이레구내식당</h4>
//         <p>2월 28일<span className="span-left">🥇</span></p>
//     </div>
//   );
// }

// map대신 for문으로 한다면
/* function App() {
  let arr = [];
  for (let i=0; i<3; i++) {
    arr.push(<div>안녕</div>)
  }
  // return문 안에서 for문 사용이 안됨!
  return (
    <div>
      {arr}
    </div>
  )
} */
  );

  // 여기는 변수명을 임의 설정이 아닌, 무조건 props이다!
  function Modal2(props) {
    
    return (
      // <div className='modal' style={{backgroundColor : props.color}}>  
      <div className='modal'>
          <h4>{props.title[props.newModalIdx]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={()=>{
            let copy = [...props.title]; // 괄호를 벗겨내라 배열, 객체 등 새로운 것으로 만들어 반환 
            copy[props.newModalIdx] = '김밥천국';
            props.setTitle(copy);        
          }}>제목수정</button>
      </div>
    );
  }
}

export default App;
