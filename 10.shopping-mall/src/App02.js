import './App.css';
import {Navbar,Container,Nav, Row, Col, NavDropdown} from 'react-bootstrap';
// import shoes1 from './img/shoes.1.png';
// import shoes2 from './img/shoes.2.png';
// import shoes3 from './img/shoes.3.png';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
// import Num from './data/ProductList';

/* 
- export {num1, num2} 여러개 했을 때 
  import할 때 export의 이름이 같아야 함
  ex) import {num1, num2}
*/
import {num1, num2} from './data/ProductList';
import pList from './data/ProductList';
// import { shoes1 } from '/img/shoes1.png';
import Detail from './pages/Detail';


/*  
  - 페이지 전환하기
  * 기존의 페이지 전환
  1) detail.html파일 만들고
  2) /detail로 접속하면 detail.html파일 보여줌

  * react에서 페이지 전환
  1) 컴포넌트로 상세페이지 만들기
  2) /detail로 접속하면 기존의 index.html파일을 모두 비운 후
  1번의 컴포넌트를 보여줌(싱글페이지)
  
 - router-dom : 페이지 교체시켜주는 api
    1) 설치 : npm i react-router-dom
    2) index.js에서 <BrowserRouter></BrowserRouter>로 감싸줌
    3) App.js에서 import
*/

function App() {
  
  let [shoes] = useState(pList);  
  console.log(shoes);

  /*
  - user로 시작하는 함수를 Hook이라 함.
    Hook : 함수형 컴포넌트에서 클래스형 컴퍼넌트의 기능
          (state(상태값), life cycle)을 사용할 수 있도록 해주는 함수

  */
  let navigate = useNavigate(); // 페이지의 이동을 도와주는 함수

  return (
    <div className="App">  
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link> */}
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            <Link to="/">Home</Link>&emsp;
            <Link to="/detail">상세페이지</Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
     </Navbar>

     <Routes>
        {/* <Route path='url' element={실행하고자하는 값}/> */}
        <Route path='/' element={
          <>
            <div className='main-bg'/>
              <Container>
                <Row>
                  {
                    shoes.map((list, i) => {
                      return(
                        <PListImg shoes={list} i={i+1}/>
                        // <PListImg shoes={shoes[i]} i={i+1}/>
                      )
                    })
                  }
                </Row>
              </Container>
          </>
        }/>
            {/* 404페이지 */}
        {/* <Route path='/detail' element={<Detail shoes={shoes}/>}/>   
        <Route path='/detail/0' element={<Detail shoes={shoes[0]}/>}/>  
        <Route path='/detail/1' element={<Detail shoes={shoes[1]}/>}/>  
        <Route path='/detail/2' element={<Detail shoes={shoes[2]}/>}/>  
        */}
        {/* 마음대로 */}
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>  
        

        <Route path='/cart' element={<div>장바구니</div>}/>
        <Route path='*' element={<div>없는 페이지 입니다.</div>}/> 
      
      {/* <Route path='member' element={<div>직원들</div>}/>
        <Route path='location' element={<div>찾아오는길</div>}/> */}

      <Route path='/about' element={ <About /> }>
        <Route path='member' element={<div>직원들</div>}/>
        <Route path='location' element={<div>찾아오는길</div>}/>
      </Route>

        {/* 
        /event/ev1 => 
        오늘의 이벤트
        맨처음 프로그램 다한사람 쉬기

        /event/ev2 =>
        오늘의 이벤트
        생일기념 쿠폰받기 
        */}

      <Route path='/event' element={ <Event /> }>
        <Route path='ev1' element={<div>오늘의 이벤트</div>}/>
        <Route path='ev2' element={<div>생일기념 쿠폰받기</div>}/>
      </Route>
      </Routes>
    

     </div>
  );
}

function Event() {
  return (
    <>
      <h4>이벤트 정보들</h4>
      <Outlet></Outlet>
    </>
  )
}

function About() {
  return (
    <>
      <h4>회사정보들</h4>
      <Outlet></Outlet>
    </>
  )
}

function PListImg(props) {
  return (
  <>
    <Col md={4}>
      <img src={`${process.env.PUBLIC_URL}/img/shoes.${props.i}.png`} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  </>
  );
}

          
export default App;
