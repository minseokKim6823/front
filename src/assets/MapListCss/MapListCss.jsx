import styled from "styled-components";

export const MapWrap = styled.div`
  position: absolute;
  top: 515px;
  left: 0px;
  height: 700px;
  width: 100%;
  border-radius: none;
  background-color: white;
  border: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

// export const ListContainer = styled.div`
//     position: absolute;
//     margin: none;
//     padding: none;
//     height: 100%;
//     width: calc(30%);
//     background-color: red;
// `;

export const MapArea = styled.div`
    position: absolute;
    left: 0%;
    width: calc(100%);
    height: 100%;
    margin: none;
    padding: none;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

export const CheckBoxContainer = styled.div`
  position: absolute;

`;

export const ListContainer = styled.div`
    position: absolute;
    margin: none;
    padding: none;
    height: 100%;
    width: 30%;
    left: 0px;
    background-color: white;
`;

export const GenderCheckboxWrapper = styled.div`
    position: absolute;
    margin: none;
    top: 100px;
    left: 200px;
    background-color: whtie;
`;

export const ClothingCheckboxWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 10px;
`;

export const SearchButton = styled.button`
  position: absolute;
  width: 80px;
  height: 30px;
  left: 90px;
  top: 150px;
    padding: none;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #36803a;
    }
`;

export const SearchContainer = styled.div`
    position: absolute;
    margin: none;
    padding: none;
    width: 100%;
    height: 200px;
    background-color: gray;
`;

export const TitleSearchInput = styled.input`
    position: absolute;
    margin: none;
    padding: none;
    top: 40px;
    left: 30px;
    width: 200px;
    height: 30px;
    border: 1px solid black;
`;

export const ProductConatiner = styled.div`
    position: absolute;
    margin: none;
    padding: none;
    width: 100%;
    margin-top: 200px;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
`;

export const ProductCard = styled.div`
  position: absolute;
  left: 10px;
  top: 20px;
  margin-top: 15px;
  margin-left: 10px;
  /* margin-left: 0px;
  margin-bottom: 30px;
  margin-top: 30px; */
  width: 380px;
  height: 400px;
  border: 2px solid gray;
  border-radius: 5px;
  box-shadow: none;
  overflow: hidden;
  background-color: white;
`;

export const Title = styled.div`
  position: absolute;
  width: 100px;
  height: 20px;
  border: none;
  left: 10px;
  top: 10px;
`;

export const ClothImg = styled.img`
  position: absolute;
  width: 310px;
  height: 200px;
  left: 30px;
  top: 40px;
`;

export const ProductShow = styled.div`
  position: absolute;
  left: 10px;
  top: 5px;
  height: 20px;
  width: 100px;
`;

export const SellerName = styled.div`
  position: absolute;
  top: 245px;
  width: 200px;
  height: 25px;
  border: 1px solid black;
  left: 10px;
`;

export const ClothContents = styled.div`
  position: absolute;
  pointer-events: none;
  overflow: hidden;
  width: 350px;
  height: 100px;
  border: 1px solid black;
  top: 275px;
  left: 10px;
`;

export const GoToDetailButton = styled.button``;

export const SearchTitle = styled.div`
  position: absolute;
`;

export const ClothCategory = styled.div`

`;
