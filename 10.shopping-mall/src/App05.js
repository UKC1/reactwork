import './App.css';
import { Navbar,Container,Nav, Row, Col, NavDropdown, Button } from 'react-bootstrap';
import { createContext, useState } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import pList from './data/ProductList';
import Detail from './pages/Detail';
import axios from 'axios';

/*  
  axios 설치
  npm i axios
*/

export let Context1 = createContext();

function App() {
  let [stock, setStock] = useState([10,11,12]);
  let [shoes, setShoes] = useState(pList);  
  let [num, setNum] = useState(2);
  // let cnt = 2;
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
        </Navbar.Collapse>
      </Container>
     </Navbar>

     <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'/>
              <Container>
                <Row>
                  {
                    shoes.map((list, i) => {
                      return(
                        <PListImg shoes={list} i={i+1}/>
                      )
                    })
                  }
                </Row>
              </Container>
              <Button varient="secondary" onClick={()=>{
                /* 
                axios.Method('서버url')
                    .then((변수)=>P{}) -> 성공했을 때
                    .catch(()=>{}) -> 실패했을 때 
                
                서버로 보낼 때
                axios.post('서버 url', 보낼 데이터)
                     .then((변수)=>{}) -> 성공했을 때
                     .catch(()=>{})    -> 실패했을 때
                axios.post('https://raw.githubusercontent.com', {name:'kim', age:20, tel:'010-1111-2222'})
                    .then((변수)=>{}) -> 성공했을 때
                    .catch(()=>{})    -> 실패했을 때
                - 여러서버에 동시 요청
                  Promise.all([axios.get('서버url'), axios.get('서버2url'), ])
                         .then((변수)=>{}) -> 성공했을 때
                         .catch(()=>{}) -> 실패했을 때
                */

                    
                    axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${num}.json`)
                        .then((result)=>{
                          // let copy = [...result.data];
                          let copy = [...shoes, ...result.data];
                          setShoes(copy);
                          // cnt += 1;
                          setNum(num + 1);  
                          console.log(result);
                          console.log(result.data);
                          console.log(copy);
                    
                        })
                        .catch(()=>{
                          alert('더 이상 추가할 데이터가 없습니다')
                          console.log('실패');
                        })
              }}>서버에서 데이터 가져오기</Button>
          </>
        }/>
        <Route path='/detail/:id' element={
          <Context1.Provider value={{stock, shoes}}>
             <Detail shoes={shoes}/>
          </Context1.Provider>
        }/>  
        
        <Route path='/cart' element={<div>장바구니</div>}/>
        <Route path='*' element={<div>없는 페이지 입니다.</div>}/> 
      
        <Route path='/about' element={ <About /> }>
          <Route path='member' element={<div>직원들</div>}/>
          <Route path='location' element={<div>찾아오는길</div>}/>
        </Route>

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
