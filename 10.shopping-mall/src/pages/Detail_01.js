import {Container, Row, Col, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
/*
    let[clothes] = useState(pList)의 값이 정렬로 바뀌었다면
    0번을 호출하면 다른것이 나옴
    pList의 id를 사용하면 바뀌지 않음
*/

/*
    styled-components : 스타일을 컴포넌트로 만들어 사용하기
    1) 설치 : npm i styled-components
    
    장점
    1) css없이 js에서 바로 스타일을 넣을 수 있다
    2) 컴포넌트형 스타일은 다른 js에 영향을 주지 않는다
    3) 페이지 로딩시간 단축

    단점
    1) js파일이 복잡해진다
    2) js파일간에 중복사용시 export하고 import하여 쓴다
    
*/

let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px;
`;

let Box = styled.div`
    background : gray;
    height : 100px;
`;

let BlueBtn = styled.button`
    background : blue;
    color : black;
    padding : 10px;
`;

let Btn = styled.button`
    background : ${props => props.bg};
    padding : 10px;
    color : ${props => props.bg == 'blue' ? 'white' : 'black'};
`;

function Detail(props) {

    useEffect(() => {
        // mount, update 될 때 실행
        // Lifecycle Hook이라함
        console.log('로드되고 실행');
    })
    // useParams();
    let {id} = useParams();
    console.log(id);
    console.log(typeof(id));
    let findId = props.shoes.find(function(x) {
        return x.id == id
    })
    
    return(
        <>
        <Box>
            박스1
            <YellowBtn>노랑버튼</YellowBtn>
            <BlueBtn>파랑버튼</BlueBtn>
            <Btn>버튼</Btn>
        </Box>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={`${process.env.PUBLIC_URL}/img/shoes.${findId.id + 1}.png`} width="400px"/>
                    </Col>
                    <Col md={6}>
                        {/* <h4>{props.shoes[id].title}</h4>
                        <p>{props.shoes[id].content}</p>
                        <p>{props.shoes[id].price}</p>
                         */}
                        <h4>{findId.title}</h4>
                        <p>{findId.content}</p>
                        <p>{findId.price}</p>
                        <Button variant="secondary">주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Detail;