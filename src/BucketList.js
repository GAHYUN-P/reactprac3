// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from "styled-components";

// 함수형 컴포넌트는 이렇게 쓸 수도 있고 function Bucketlist(props){ return ( <div>버킷 리스트</div>
// ); } 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요. 저희는 앞으로 화살표 함수를 사용할거예요. 앗 () 안에
// props! 부모 컴포넌트에게 받아온 데이터입니다. js 함수가 값을 받아오는 것과 똑같이 받아오네요.
const BucketList = (props) => {
    // props대신 ({list_a})로 받아와도 됨
    console.log(props)

    // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
    const my_list = props.list_a;


    const my_wrap = React.useRef(null);
    // useRef()의 인자는 가장 초기값이다.
    console.log(my_wrap)
    // ref를 만들자마자 console을 찍었기때문에 null이 나온다 그 다음에 return이 된다.
    window.setTimeout(() => { // 1초 뒤에는?!
        console.log(my_wrap);
      }, 1000);
    // {current: div} 나온다. 1초 뒤에는 진짜 DOM으로 리턴해주는 요소들을 다 보내버렸기 때문.
    

    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <div ref={my_wrap}>
            {
                // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요. 자세한 사용법은 아래 링크를 확인해주세요.
                // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                my_list.map((list, index) => {
                    // props가 list형이기 때문에 props.list_a로 가져와야 배열의 형태로 가져온다.
                    // 콘솔을 확인해봅시다 :)
                    console.log(list);
                    return (<div key={index}><ListBox>{list}</ListBox></div>);
                })
            }
        </div>
    );
}


const ListBox = styled.button`
    background-color: #CDCDCD;
    height: 5vh;
    width: 30vw;
    font-size: 0.8em;
    margin: 1vh 2vw;
    padding: 1vh;
    border: none;
    border-radius: 3px;
    &:hover{
        background-color: white;
        border: 2px solid #CDCDCD;
    }
`;
// 우리가 만든 함수형 컴포넌트를 export 해줍니다. export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수
// 있어요.
export default BucketList;