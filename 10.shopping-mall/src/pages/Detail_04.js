import './../App.css';
// root부터 시작하니 상위 폴더면 ..
import {Container, Row, Col, Button, Nav} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/*
    전환 애니메이션
    1) css에 애니메이션 동작 전 스타일(className)
    2) css에 애니메이션 동작 후 스타일(className)
    3) transition 속성 추가
    4) 원하는 태그에 속성 className 넣었다 뺐다
*/

/*
- Lifecycle(생명주기)
    class Detail extends React.Component {
        componentDidMount() {
            // Detail 컴포넌트가 로드 되고나서 실행할 코드
        }

        componentDidUpdate() {
            // Detail 컴포넌트가 업데이트 되고나서 실행할 코드
        }

        componentWillUnmount() {
            // Detail 컴포넌트가 삭제 되기 전에 실행할 코드
        }
    }
        컴포넌트는
        1) 생성이 될 수도 있고(mount)
        2) 재렌더링이 될 수도 있고(update)
        3) 삭제가 될 수도 있다(unmount)

    - useEffect 안에 적은 코드는 html렌더링 이후에 동작한다
    * useEffect 밖에 적은 코드는 위에서부터 차례대로 실행
    # html 렌더링이 빠른 사이트를 원하면 시간이 걸리는 코드는 useEffect() 안에 
    
    # useEffect안에 적는 코드들
    1) 어려운 연산(시간이 걸리는 연산)
    2) 서버에서 데이터를 가져오는 작업
    3) 타이머 등

    - useEffect(()=>{실행할 코드}) : mount, update가 될 때마다 실행
    - useEffect(()=>{실행할 코드}, []) : mount되었을 때 1번만 실행 
    - useEffect(()=>{실행할 코드}, [변수]) : 변수가 변할 때만 실행
    - useEffect(() => {
        실행할 코드;
        return()=>{
            unmount시 1회 실행
        }}, [변수])
    
*/
function Detail(props) {
    // useState(true)를 만들어서
    // 2초 후에 false바꿔주면됨
    // let [alert, setAlert] = useState(true);
    let [count, setCount] = useState(0);
    let [num, setNum] = useState('');
    let [tab, setTab] = useState(0);
    let [fade2, setFade2] = useState('');

    useEffect(()=>{
        if(isNaN(num) == true) {
            alert('숫자만 넣으셈')
        }
    }, [num])
    /* useEffect(() => {
        let timer = setTimeout(()=>{setAlert(false)}, 2000);
        // mount, update 될 때 실행
        // Lifecycle Hook이라함
        return () => {
            clearTimeout(timer);
            // alert('기존타이머 삭제');
        }
        // count가 변할 때마다 실행
    }, [count])
     */
    console.log('로드되고 실행');

    // for(let i=0; i<100000; i++) {
    //     console.log(i);
    // }

    // useParams();
    let {id} = useParams();
    let findId = props.shoes.find(function(x) {
        return x.id == id
    })
    
    return(
        <>
        <input onChange={(e)=>{setNum(e.target.value)}} />
        {
            alert == true ? <div>2초 이내에 구매시 10% 할인</div> : null   
        }
        {count}
        <button onClick={()=>{setCount(count+1)}}>버튼</button>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={`${process.env.PUBLIC_URL}/img/shoes.${findId.id + 1}.png`} width="400px"/>
                    </Col>
                    <Col md={6}>
                        <h4>{findId.title}</h4>
                        <p className='tcolor'>{findId.content}</p>
                        <p>{findId.price}</p>
                        <Button variant="secondary">주문하기</Button>
                    </Col>
                </Row>
            </Container>
            <Nav variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{setTab(0)}}>탭 0</Nav.Link>   
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>탭 1</Nav.Link>   
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>탭 2</Nav.Link>   
                </Nav.Item>
            </Nav>
        
            <TabContent tab={tab} name={'kim'} age={30}/>
            {/* {
                tab == 0 ? <div>내용0</div> : (tab == 1 ? <div>내용1</div> : tab == 2 ? <div>내용2</div> : null)
            } */}
            
        </>
    )
}

// props가 싫으면 매개변수를 받을 때 변수를 직접 입력해 주면 됨
function TabContent({tab}) {
    let [fade, setFade] = useState('')

    useEffect(()=>{
        setTimeout(()=>{setFade('end')}, 200)
        return()=>{
            
            setFade('')
        }
    },[tab])

    return (
        // 반드시 start 뒤에 한 칸 뛰어줘야 함
    <div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
    )
}
// function TabContent({tab, name, age}) {
//     console.log(tab);
//     console.log(name);
//     console.log(age);
//     if (tab==0) {
//         <div>내용0</div>
//     } else if(tab==1) {
//         <div>내용1</div>
//     } else {
//         <div>내용2</div>
//     }
// }

// function TabContent(props) {
//     if (props.tab==0) {
//         <div>내용0</div>
//     } else if(props.tab==1) {
//         <div>내용1</div>
//     } else {
//         <div>내용2</div>
//     }
// }

export default Detail;