import { ScrollRestoration, useNavigate } from "react-router-dom";
import { Text, Div, Div17, Card, PicIcon, Area, B1, Parent, Div13, Div14, Text3, Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Div18, Div12, Div16, DivRoot, Div5, Div4, Div2, Div6, Div11, Div7, Text2, Div8, Div9, Div10, Wrapper, IcroundArrowBackIos, VectorIcon, Div3, Text1, Div1, IcroundArrowBackIosIcon, FrameDiv, B, SearchTitle, SearchButton } from "../assets/BoardListCss/BoardlistCss";
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import GenderBoardList from "../components/BoardList/GenderBoardList";
import GenderDropdownSearch from "../components/BoardList/GenderBoardList";
import ClothingDropdown from "../components/BoardWrite/ClothingDropdown";
import ClothingDropdownSearch from "../components/BoardList/ClothingDropdownSearch";
import { Link } from 'react-router-dom';

const BoardList = () => {
  const searchTitleRef = useRef();
  const genderDropdownRef = useRef();
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);
  const [search, setSearch] = useState({
    title: '',
    gender: '',
    clothCategory: '',
  })

  const { place, title, clothCategory, gender } = search;
  // 타이틀, 본문 보드에 반영
  const onChange = (event) => {
    const { value, name } = event.target;
    setSearch({
      ...search,
      [name]: value,
    });
    console.log(search);
  };
  // 검색
  const searchBoard = async () => {
    const { title, gender, clothCategory } = search;
    try {
      const response = await axios.get(`//localhost:8080/board/search?query`, {
        params: { title, gender, clothCategory },
      });
      setBoard(response.data);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류 발생:", error);
    }
  };
  // 검색시 조건문
  const validateSearchInputs = () => {
    if (!search.title && !search.gender) {
      alert('Please select a title or gender.');
      searchTitleRef.current.focus();
      genderDropdownRef.current.focus();
    }
  };
  // const board = searchBoard;
  return (
    <>
      <Div18>
        {/* BoardList의 검색 부분 */}
        <Div5>
          <Div>
            <Text>검색</Text>
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
        </Div5>
        <Div6 />
        <Div11>
          <Div7>
            <Text2>키워드 및 카테고리</Text2>
          </Div7>
          <SearchTitle placeholder="제목을 입력하세요" ref={searchTitleRef}
            type="text" name="title" value={title} onChange={onChange} />
          <GenderDropdownSearch name='gender' search={search} setSearch={setSearch} ref={genderDropdownRef} />
          <ClothingDropdownSearch name='clothCategory' search={search} setSearch={setSearch} ref={genderDropdownRef} />
          <SearchButton onClick={searchBoard}>
            검색
          </SearchButton>
        </Div11>
        {/* 상품 보여주는 부분 */}
        {board.map((item) => (
          <Card key={item.boardId}>
            <Link to={`/board/${item.boardId}`}>
              <PicIcon src={item.postImg[0]} alt="이미지 로딩중" />
              <Area>
                <B1>{item.title}</B1>
                <Parent>
                  <Div12>{item.gender}</Div12>
                  <Div13>{`>`}</Div13>
                  <Div14>{item.clothCategory}</Div14>
                </Parent>
                <Div16>
                  <Text3>{`${item.price}원`}</Text3>
                </Div16>
              </Area>
            </Link>
          </Card>
        ))}
      </Div18>
    </>
  );
};

export default BoardList;
