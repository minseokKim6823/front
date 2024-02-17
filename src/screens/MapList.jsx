import React, { useEffect, useState } from 'react';
import { ClothContents, ClothImg, ClothingCheckboxWrapper, GenderCheckboxWrapper, GoToDetailButton, ListContainer, MapArea, MapWrap, ProductCard, ProductConatiner, ProductShow, SearchButton, SearchContainer, SearchTitle, SellerName, Title, TitleSearchInput } from '../assets/MapListCss/MapListCss';
import Map from '../components/MapList/Map';
import List from '../components/MapList/List';
import axios from 'axios';


const MapList = () => {
    const [search, setSearch] = useState({
        title: '',
        gender: '',
        clothCategory: '',
    });
    // 검색 결과 보드
    const [board, setBoard] = useState('');
    const handleTitleChange = (e) => {
        setSearch(prevState => ({
            ...prevState,
            title: e.target.value,
        }));
    };
    const handleGenderChange = (e) => {
        setSearch(prevState => ({
            ...prevState,
            gender: e.target.value,
        }));
    };
    const handleClothCategoryChange = (e) => {
        setSearch(prevState => ({
            ...prevState,
            clothCategory: e.target.value,
        }));
    };
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
    return (
        <>
            <MapWrap>
                <ListContainer>
                    <SearchContainer>
                        <SearchTitle>검색하기</SearchTitle>
                        <TitleSearchInput type='text' placeholder='제목을 입력하세요' onChange={handleTitleChange} />
                        <GenderCheckboxWrapper>
                            <input type="radio" id="male" name="gender" value="male" onChange={handleGenderChange} />
                            <label htmlFor="male">남성</label>
                            <input type="radio" id="female" name="gender" value="female" onChange={handleGenderChange} />
                            <label htmlFor="female">여성</label>
                        </GenderCheckboxWrapper>
                        <ClothingCheckboxWrapper>
                            <input type="radio" id="tops" name="clothing" value="tops" onChange={handleClothCategoryChange} />
                            <label htmlFor="tops">상의</label>
                            <input type="radio" id="bottoms" name="clothing" value="bottoms" onChange={handleClothCategoryChange} />
                            <label htmlFor="bottoms">하의</label>
                            <input type="radio" id="outerwear" name="clothing" value="outerwear" onChange={handleClothCategoryChange} />
                            <label htmlFor="outerwear">아우터</label>
                        </ClothingCheckboxWrapper>
                        <SearchButton onClick={searchBoard}>Search</SearchButton>
                    </SearchContainer>
                    <ProductConatiner>
                        <ProductShow>상품정보</ProductShow>
                        <ProductCard>
                            <Title>타이틀</Title>
                            <ClothImg></ClothImg>
                            <SellerName>닉네임</SellerName>
                            {/* <ClothCategory>
                                <GenderTitle>{board.gender}</GenderTitle>
                                <Div13>{`>`}</Div13>
                                <ClothTitle>{board.clothCategory}</ClothTitle>
                            </ClothCategory> */}
                            <ClothContents></ClothContents>
                            {/* <GoToDetailButton></GoToDetailButton> */}
                        </ProductCard>
                    </ProductConatiner>
                </ListContainer>
                <MapArea>
                    <Map />
                </MapArea>
            </MapWrap>
        </>
    );
};

export default MapList;
