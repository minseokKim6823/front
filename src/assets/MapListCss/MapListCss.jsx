import styled from "styled-components";

export const MapWrap = styled.div`
  position: absolute;
  top: 72px;
  left: none;
  height: 700px;
  width: 100%;
  border-radius: none;
  background-color: blue;
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
    left: 30%;
    width: calc(70%);
    height: 100%;
    margin: none;
    padding: none;
    background-color: green;
    display: flex;
    flex-direction: column;
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
    margin-top: 80%;
    margin-left: 20px;
    background-color: blue;
`;

export const ClothingCheckboxWrapper = styled.div`
    margin-bottom: 10px;
`;

export const SearchButton = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

export const SearchContainer = styled.div`
    position: absolute;
    margin: none;
    padding: none;
    width: 100%;
    height: 250px;
    background-color: gray;
`;

export const TitleSearchInput = styled.input`
    position: absolute;
    margin: none;
    padding: none;
    width: 100px;
    height: 30px;
    border: 1px solid black;
`;

export const ProductConatiner = styled.div`
    position: absolute;
    margin: none;
    padding: none;
    width: 100%;
    margin-top: 250px;
    background-color: orange;
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
