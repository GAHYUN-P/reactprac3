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
          <Container>         
            <h1>내 버킷리스트</h1>
            <hr/>
            <BucketList list_a = {list}/>
          </Container>  
        </div>
    );
}

const Container = styled.div `
    background-color: #F4D0DA;
    width: 35vh;
    height: 50vw;
    margin: auto;
    border-radius: 5px;
    h1 {
      color: #AEAEB0;
      font-size: 1.5em;
      padding-top: 2vh;
    }
`;

export default App;