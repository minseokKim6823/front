import styled from "styled-components";

export const NavBarContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0%;
  left: 0%;
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  height: 72px;
  overflow: hidden;
`;
export const HomeLogo = styled.img`
  position: absolute;
  top: calc(50% - 20px);
  left: 20px;
  width: 40px;
  height: 40px;
  overflow: hidden;
`;
export const ToBoardListButton = styled.button`
  border: none;
  position: absolute;
  top: 12px;
  height: 47px;
  left: 70px;
  width: 75px;
  display: flex;
  flex-direction: column;
  background-color: #7fccde;
  font-size: var(--font-size-mid);
  padding: var(--padding-sm) 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
`;
export const ToBoardWrite = styled.button`
  border: none;
  position: absolute;
  top: 12px;
  height: 47px;
  left: 165px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  background-color: #00AE68;
  font-size: 15px;
  &:hover {
    background: green;
    color: white;
    transition: 0.5s;
  }
`;
export const MyPageButton = styled.button`
  position: absolute;
  top: 12px;
  right: 110px;
  background-color: #ff5f68;
  width: 100px;
  height: 47px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-sm) 0px;
  box-sizing: border-box;
  font-size: var(--font-size-mid);
  border: none;
`;
export const LoginButton = styled.button`
  border: none;
  position: absolute;
  top: 12px;
  right: 15px;
  width: 81px;
  height: 47px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-sm) 0px;
  box-sizing: border-box;
  font-size: var(--font-size-mid);
  background-color: #1e90ff	;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
`;
