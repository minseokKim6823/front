import React, { useEffect, useState } from 'react';
import { ClothContents, ClothImg, ClothingCheckboxWrapper, GenderCheckboxWrapper, GoToDetailButton, ListContainer, MapArea, MapWrap, ProductCard, ProductConatiner, ProductShow, SearchButton, SearchContainer, SearchTitle, SellerName, Title, TitleSearchInput } from '../assets/MapListCss/MapListCss';
import HomeMap from '../Map/HomeMap';


const MapList = () => {
    return (
        <>
            <MapWrap>
                <MapArea>
                    <HomeMap />
                </MapArea>
            </MapWrap>
        </>
    );
};

export default MapList;
