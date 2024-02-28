import './App.css';
import {useState} from 'react';

function App() {
  // let title='이레구내식당';
  // let title=['이레구내식당', '영남집', '얌샘김밥'];
  // let [title] = useState(['이레구내식당', '영남집', '얌샘김밥']);

  let [title, setTitle] = useState('영남집');
  let [like, setLike] = useState(0);
  let [num1, num2] = [3, 6];
  return (
    <div className="App">
      <h2 className='title1'>맛집 추천 Blog</h2>
      {/* <Restaurant/>
      <Restaurant/>
      <Restaurant/> */}
      <div className='list'>
        <h4>{title[0]}</h4>
        <p>2월 28일<span onClick={() => {setLike(like+1)}} className='span-left'>🥇</span>{like}</p>
      </div>
      <div className='list'>
          <h4>{title[1]}</h4>
          <p>2월 28일<span className="span-left">🥇</span></p>
      </div>
      <div className='list'>
          <h4>{title[2]}</h4>
          <p>2월 28일<span className="span-left">🥇</span></p>
      </div>
    </div>
  );  
}

// function Restaurant() {
//   return (
//     <div className='list'>
//         <h4>이레구내식당</h4>
//         <p>2월 28일<span className="span-left">🥇</span></p>
//     </div>
//   );
// }

export default App;
