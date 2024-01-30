프론트 연습입니다.
# Front_Test

BoardList의 검색 부분
 {/* <Div5>
          <Div>
            <Text>검색 결과</Text>
          </Div>
          <Div4>
            <Div2>
              <Wrapper>
                <Div1>서울시 종로구 익선동</Div1>
              </Wrapper>
              <IcroundArrowBackIos>
                <VectorIcon alt="" src="/vector.svg" />
              </IcroundArrowBackIos>
            </Div2>
            <Div3>
              <Text1>지역</Text1>
            </Div3>
          </Div4>
        </Div5> */}
        {/* <Div6 /> */}
        {/* <Div11>
          <Div7>
            <Text2>키워드 및 카테고리</Text2>
          </Div7>
          <Div8>
            <Wrapper>
              <Div1>카테고리 1</Div1>
            </Wrapper>
            <IcroundArrowBackIosIcon alt="" src="/icroundarrowbackios@2x.png" />
          </Div8>
          <Div9>
            <Wrapper>
              <Div1>카테고리 1</Div1>
            </Wrapper>
            <IcroundArrowBackIosIcon alt="" src="/icroundarrowbackios@2x.png" />
          </Div9>
          <Div10>
            <FrameDiv>
              <Div1>#키워드1 #키워드2 #키워드2</Div1>
            </FrameDiv>
          </Div10>
          <Wrapper1>
            <B>재검색</B>
          </Wrapper1>
        </Div11> */}


import { Text, Div, Div17, Card, PicIcon, Area, B1, Parent, Div13, Div14, Text3, Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Div18, Div12, Div16, DivRoot } from "../assets/BoardlistCss";
import React, { useState, useEffect } from 'react';


const BoardList = () => {
  const [data, setData] = useState([]); // 전체 데이터
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 9; // 페이지당 아이템 수

  // 전체 데이터에서 현재 페이지에 맞는 데이터 가져오기
  const getCurrentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // // 전체 데이터를 API 등에서 가져오는 useEffect
  // useEffect(() => {
  //   // API 호출 또는 데이터 로딩 로직 구현
  //   // 예: fetch('https://api.example.com/data').then(response => response.json()).then(data => setData(data));
  // }, []);



  <!-- const user = [
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
            <PicIcon alt="" src="/pic@2x.png" />
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
          {/* <Card1>
            <PicIcon alt="" src="/pic@2x.png" />
            <Area>
              <B1>{user[1].title}</B1>
              <Parent>
                <Div12>{user[1].gender}</Div12>
                <Div13>{`>`}</Div13>
                <Div14>{user[1].clothCategory}</Div14>
              </Parent>
              <Div16>
                <Text3>{`${user[1].price}원`}</Text3>
              </Div16>
            </Area>
          </Card1>
          <Card2>
            <PicIcon alt="" src="/pic@2x.png" />
            <Area>
              <B1>{user[2].title}</B1>
              <Parent>
                <Div12>{user[2].gender}</Div12>
                <Div13>{`>`}</Div13>
                <Div14>{user[2].clothCategory}</Div14>
              </Parent>
              <Div16>
                <Text3>{`${user[2].price}원`}</Text3>
              </Div16>
            </Area>
          </Card2>
        </Div17>
        <Div17>
          <Card3>
            <PicIcon alt="" src="/pic@2x.png" />
            <Area>
              <B1>{user[3].title}</B1>
              <Parent>
                <Div12>{user[3].gender}</Div12>
                <Div13>{`>`}</Div13>
                <Div14>{user[3].clothCategory}</Div14>
              </Parent>
              <Div16>
                <Text3>{`${user[3].price}원`}</Text3>
              </Div16>
            </Area>
          </Card3>
          <Card4>
            <PicIcon alt="" src="/pic@2x.png" />
            <Area>
              <B1>{user[4].title}</B1>
              <Parent>
                <Div12>{user[4].gender}</Div12>
                <Div13>{`>`}</Div13>
                <Div14>{user[4].clothCategory}</Div14>
              </Parent>
              <Div16>
                <Text3>{`${user[4].price}원`}</Text3>
              </Div16>
            </Area>
          </Card4>
          <Card5>
            <PicIcon alt="" src="/pic@2x.png" />
            <Area>
              <B1>{user[5].title}</B1>
              <Parent>
                <Div12>{user[5].gender}</Div12>
                <Div13>{`>`}</Div13>
                <Div14>{user[5].clothCategory}</Div14>
              </Parent>
              <Div16>
                <Text3>{`${user[5].price}원`}</Text3>
              </Div16>
            </Area>
          </Card5>
        </Div17>
        <Div17>
          <Card6>
            <PicIcon alt="" src="/pic@2x.png" />
            <Area>
              <B1>{user[6].title}</B1>
              <Parent>
                <Div12>{user[6].gender}</Div12>
                <Div13>{`>`}</Div13>
                <Div14>{user[6].clothCategory}</Div14>
              </Parent>
              <Div16>
                <Text3>{`${user[6].price}원`}</Text3>
              </Div16>
            </Area>
          </Card6>
          <Card7>
            <PicIcon alt="" src="/pic@2x.png" />
            <Area>
              <B1>{user[7].title}</B1>
              <Parent>
                <Div12>{user[7].gender}</Div12>
                <Div13>{`>`}</Div13>
                <Div14>{user[7].clothCategory}</Div14>
              </Parent>
              <Div16>
                <Text3>{`${user[7].price}원`}</Text3>
              </Div16>
            </Area>
          </Card7>
          <Card8>
            <PicIcon alt="" src="/pic@2x.png" />
            <Area>
              <B1>{user[8].title}</B1>
              <Parent>
                <Div12>{user[8].gender}</Div12>
                <Div13>{`>`}</Div13>
                <Div14>{user[8].clothCategory}</Div14>
              </Parent>
              <Div16>
                <Text3>{`${user[8].price}원`}</Text3>
              </Div16>
            </Area>
          </Card8> */}
        </Div17>
      </Div18>
    </DivRoot>
  );
};

export default BoardList; -->
