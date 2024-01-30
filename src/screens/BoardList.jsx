import { Text, Div, Div17, Card, PicIcon, Area, B1, Parent, Div13, Div14, Text3, Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Div18, Div12, Div16, DivRoot } from "../assets/BoardlistCss";
import React, { useState, useEffect } from 'react';


const BoardList = () => {
  const [data, setData] = useState([]); // 전체 데이터

  // // 전체 데이터를 API 등에서 가져오는 useEffect
  // useEffect(() => {
  //   // API 호출 또는 데이터 로딩 로직 구현
  //   // 예: fetch('https://api.example.com/data').then(response => response.json()).then(data => setData(data));
  // }, []);

  // 임의 유저 데이터
  const user = [
    {
      id: 1,
      title: "노페",
      contents: "노스페이스",
      price: 4000,
      gender: "남성",
      clothCategory: "하의",
      place: "하이루",
      currentTime: "2024-01-25T10:20:16.555Z"
    },
    {
      id: 2,
      title: "몽클",
      contents: "몽클레어",
      price: 44000,
      gender: "여성",
      clothCategory: "아우터",
      place: "안녕",
      currentTime: "2024-01-25T10:20:16.555Z"
    }, {
      id: 3,
      title: "뉴진스",
      contents: "아이돌",
      price: 4,
      gender: "여성",
      clothCategory: "상의",
      place: "화이팅",
      currentTime: "2024-01-25T10:20:16.555Z"
    }, {
      id: 4,
      title: "ㄴㅇㄹ",
      contents: "ㄴㅇㄹ",
      price: 4,
      gender: "남성",
      clothCategory: "하의",
      place: "ㄴㅇㄹ",
      currentTime: "2024-01-25T10:20:16.555Z"
    }, {
      id: 4,
      title: "ㄴㅇㄹ",
      contents: "ㄴㅇㄹ",
      price: 4,
      gender: "남성",
      clothCategory: "하의",
      place: "ㄴㅇㄹ",
      currentTime: "2024-01-25T10:20:16.555Z"
    }, {
      id: 4,
      title: "ㄴㅇㄹ",
      contents: "ㄴㅇㄹ",
      price: 4,
      gender: "남성",
      clothCategory: "하의",
      place: "ㄴㅇㄹ",
      currentTime: "2024-01-25T10:20:16.555Z"
    }, {
      id: 4,
      title: "ㄴㅇㄹ",
      contents: "ㄴㅇㄹ",
      price: 4,
      gender: "남성",
      clothCategory: "하의",
      place: "ㄴㅇㄹ",
      currentTime: "2024-01-25T10:20:16.555Z"
    }, {
      id: 5,
      title: "ㄴㅇㄹ",
      contents: "ㄴㅇㄹ",
      price: 4,
      gender: "남성",
      clothCategory: "하의",
      place: "ㄴㅇㄹ",
      currentTime: "2024-01-25T10:20:16.555Z"
    }, {
      id: 6,
      title: "ㄴㅇㄹ",
      contents: "ㄴㅇㄹ",
      price: 4,
      gender: "남성",
      clothCategory: "하의",
      place: "ㄴㅇㄹ",
      currentTime: "2024-01-25T10:20:16.555Z"
    }, {
      id: 7,
      title: "ㄴㅇㄹ",
      contents: "ㄴㅇㄹ",
      price: 4,
      gender: "남성",
      clothCategory: "하의",
      place: "ㄴㅇㄹ",
      currentTime: "2024-01-25T10:20:16.555Z"
    }, {
      id: 8,
      title: "ㄴㅇㄹ",
      contents: "ㄴㅇㄹ",
      price: 4,
      gender: "남성",
      clothCategory: "하의",
      place: "ㄴㅇㄹ",
      currentTime: "2024-01-25T10:20:16.555Z"
    }, {
      id: 9,
      title: "ㄴㅇㄹ",
      contents: "ㄴㅇㄹ",
      price: 4,
      gender: "남성",
      clothCategory: "하의",
      place: "ㄴㅇㄹ",
      currentTime: "2024-01-25T10:20:16.555Z"
    },
  ]

  return (
    <DivRoot>
      <Div18>
        <Div17>
          <Card>
            <PicIcon alt="이미지 로딩중" src="" />
            <Area>
              <B1>타이틀</B1>
              <Parent>
                <Div12>성별</Div12>
                <Div13>{`>`}</Div13>
                <Div14>의류 카테고리</Div14>
              </Parent>
              <Div16>
                <Text3>1000원</Text3>
              </Div16>
            </Area>
          </Card>
        </Div17>
      </Div18>
    </DivRoot>
  );
};

export default BoardList;
