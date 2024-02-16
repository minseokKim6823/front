import React, { useEffect, useState } from 'react'
import { ClothContents, ClothImg, ClothingCheckboxWrapper, GenderCheckboxWrapper, GoToDetailButton, ListContainer, MapArea, MapWrap, ProductCard, ProductConatiner, ProductShow, SearchButton, SearchContainer, SellerName, Title, TitleSearchInput } from '../assets/MapListCss/MapListCss'
import Map from '../components/MapList/Map'
import List from '../components/MapList/List'
import axios from 'axios'

const MapList = () => {
    const [search, setSearch] = useState({
        title: '',
        gender: '',
        clothCategory: '',
    })
    const [board, setBoard] = useState('');
    // Useffect 사용해서 사이트 첫 접속시 전체 이미지 띄워주기
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('YOUR_API_ENDPOINT');
    //             setBoard(response.data);
    //         } catch (error) {
    //             console.error('Error fetching board data:', error);
    //             // Handle error appropriately, e.g., setBoard([]) or display an error message
    //         }
    //     };
    //     fetchData();
    //     // Cleanup function (optional)
    //     return () => {
    //         // Perform any cleanup, if necessary
    //     };
    // }, []); // Empty dependency array ensures this effect runs only once during component mount
    // 검색하기 로직(params)
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
                        <TitleSearchInput />
                        <GenderCheckboxWrapper>
                            <input type="checkbox" id="male" name="gender" value="male" />
                            <label htmlFor="male">남성</label>
                            <input type="checkbox" id="female" name="gender" value="female" />
                            <label htmlFor="female">여성</label>
                        </GenderCheckboxWrapper>
                        <ClothingCheckboxWrapper>
                            <input type="checkbox" id="tops" name="tops" value="tops" />
                            <label htmlFor="tops">Tops</label>
                            <input type="checkbox" id="bottoms" name="bottoms" value="bottoms" />
                            <label htmlFor="bottoms">Bottoms</label>
                            <input type="checkbox" id="outerwear" name="outerwear" value="outerwear" />
                            <label htmlFor="outerwear">Outerwear</label>
                        </ClothingCheckboxWrapper>
                        <SearchButton>Search</SearchButton>
                    </SearchContainer>
                    <ProductConatiner>
                        <ProductShow>상품정보</ProductShow>
                        <ProductCard>
                            <Title>안녕하세요</Title>
                            <ClothImg></ClothImg>
                            <SellerName></SellerName>
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
    )
}

export default MapList
