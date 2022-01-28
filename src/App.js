import React from 'react';
import logo from './logo.svg';
import './App.css';
// BucketList 컴포넌트를 import 해옵니다. import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';
import styled from "styled-components";

function App() {
  const list = ['영화관 가기', '매일 책읽기', '수영 배우기'];

    return (
        <div className="App">
            <MyStyled bg_color={true}>
              <p>im here</p>
            </MyStyled>
            {/* bg_color={true} 지우면 보라색됨 */}

            {/* <h1>내 버킷리스트</h1> */}
            {/* 컴포넌트를 넣어줍니다. */}
            {/* <BucketList list_a = {list}/> */}
        </div>
    );
}

const MyStyled = styled.div `
  width: 50vw;
  min-height: 150px;
  background-color: ${(props) => (props.bg_color ? "red" : "purple")};
  // if문 사용 불가, 삼항연산자 사용 가능
  p {
    color: blue;
  }
  // sass 문법도 사용 가능하다.
  // 네스팅 기능
  &:hover{
    background-color: yellow;
  }
  // sass 문법 2 : &는 나 자신을 의미
  
`;

export default App;