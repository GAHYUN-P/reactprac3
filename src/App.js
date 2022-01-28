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
            <MyStyled bg_color={"red"}/>
            {/* <h1>내 버킷리스트</h1> */}
            {/* 컴포넌트를 넣어줍니다. */}
            {/* <BucketList list_a = {list}/> */}
        </div>
    );
}

const MyStyled = styled.div `
  width: 50vw;
  min-height: 150px;
  background-color: ${(props) => (props.bg_color)}
  // ${(props) => {return props.bg_color}}와 같다
`;

export default App;