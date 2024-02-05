import styled from "styled-components";
// DivRoot
export const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #efefef;
  height: 1024px;
  overflow-y: auto;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
  font-family: var(--font-roboto);
`;

// Text
export const Text = styled.b`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text1 = styled.b`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  display: flex;
  align-items: center;
`;
export const Text2 = styled.b`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  display: flex;
  align-items: center;
  opacity: 0.9;
`;
export const Text3 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  font-weight: 600;
  display: flex;
  align-items: center;
  opacity: 0.9;
`;
// Div
export const Div = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: 0px;
  width: 92px;
  height: 40px;
`;
export const Div1 = styled.div`
  flex: 1;
  position: relative;
  line-height: 20px;
  opacity: 0.7;
`;
export const Div2 = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  left: 53px;
  border-radius: var(--br-5xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-whitesmoke-200);
  box-sizing: border-box;
  width: 185px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  gap: var(--gap-mini);
`;
export const Div3 = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: 14px;
  width: 33px;
  height: 24px;
  font-size: var(--font-size-base);
  color: var(--g-blue);
`;
export const Div4 = styled.div`
  position: absolute;
  top: 0px;
  right: -478px;
  /* background-color: var(--color-white); */
  /* border: 1px solid var(--color-darkgray);
  box-sizing: border-box; */
  width: 252px;
  height: 52px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-100);
`;
export const Div5 = styled.div`
  width: 238px;
  position: relative;
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  height: 52px;
  text-align: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.9);
`;
export const Div6 = styled.div`
  width: 226px;
  position: relative;
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  height: 52px;
`;
export const Div7 = styled.div`
  position: absolute;
  top: 8px;
  left: 14px;
  width: 145px;
  height: 24px;
  font-size: var(--font-size-base);
  color: var(--g-red);
`;
export const Div8 = styled.div`
  position: absolute;
  top: 74px;
  left: calc(50% - 344px);
  border-radius: var(--br-5xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-whitesmoke-200);
  box-sizing: border-box;
  width: 234px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-3xs);
  gap: var(--gap-mini);
`;
export const Div9 = styled.div`
  position: absolute;
  top: 74px;
  left: calc(50% - 103px);
  border-radius: var(--br-5xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-whitesmoke-200);
  box-sizing: border-box;
  width: 234px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-3xs);
  gap: var(--gap-mini);
`;
export const Div10 = styled.div`
  position: absolute;
  top: 38px;
  left: calc(50% - 344px);
  border-radius: var(--br-5xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-whitesmoke-200);
  box-sizing: border-box;
  width: 475px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-3xs);
`;

export const SearchTitle = styled.input`
  position: absolute;
  top: 38px;
  left: calc(50% - 344px);
  border-radius: var(--br-5xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid black;
  box-sizing: border-box;
  width: 475px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-3xs);
`;

export const Div11 = styled.div`
  width: 716px;
  position: relative;
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  height: 120px;
  overflow: visible;
  flex-shrink: 0;
  font-size: var(--font-size-sm);
  color: var(--color-gray-100);
`;
export const Div12 = styled.div`
  width: 52px;
  position: relative;
  line-height: 18px;
  display: inline-block;
  height: 18px;
  flex-shrink: 0;
`;
export const Div13 = styled.div`
  width: 8px;
  position: relative;
  line-height: 18px;
  display: inline-block;
  height: 18px;
  flex-shrink: 0;
`;
export const Div14 = styled.div`
  width: 55px;
  position: relative;
  line-height: 18px;
  display: inline-block;
  height: 18px;
  flex-shrink: 0;
`;
export const Div15 = styled.div`
  width: 35px;
  position: relative;
  line-height: 18px;
  display: inline-block;
  height: 18px;
  flex-shrink: 0;
`;
export const Div16 = styled.div`
  position: absolute;
  top: 48px;
  left: 8px;
  width: 145px;
  height: 24px;
  font-size: var(--font-size-sm);
  color: var(--g-red);
`;
export const Div17 = styled.div`
  width: 716px;
  position: relative;
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  height: 300px;
`;
export const Div18 = styled.div`
  position: absolute;
  top: 70.5px;
  left: calc(50% - 358px);
  /* border-radius: 0px 0px var(--br-xl) var(--br-xl); */
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  width: 716px;
  overflow: visible;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
// Wrapper
export const Wrapper = styled.div`
  flex: 1;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const SearchButton = styled.button`
  position: absolute;
  top: 47px;
  right: 140px;
  border-radius: 6px;
  border: none;
  background-color: #ff5f68;
  width: 69px;
  height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 0px;
  box-sizing: border-box;
  text-align: center;
  font-size: 17px;
  color: black;
  color: var(--color-white);
  &:hover {
    background: green;
    color: white;
    transition: 0.5s;
  }
`;

export const VectorIcon = styled.img`
  width: 16px;
  position: relative;
  height: 22px;
  transform: rotate(-180deg);
`;
export const IcroundArrowBackIos = styled.div`
  height: 31px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-sizing: border-box;
  transform: rotate(180deg);
`;
export const IcroundArrowBackIosIcon = styled.img`
  max-width: 100%;
  overflow: hidden;
  height: 25.66px;
  object-fit: contain;
`;
export const FrameDiv = styled.div`
  width: 455px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const B = styled.b`
  position: relative;
`;
export const PicIcon = styled.img`
  position: absolute;
  height: calc(100% - 83px);
  width: 90%;
  top: 5px;
  right: 10px;
  bottom: 82.5px;
  left: 10px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
export const B1 = styled.b`
  position: absolute;
  top: 6px;
  left: 6px;
`;
export const Parent = styled.div`
  position: absolute;
  top: 27.5px;
  left: 6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  font-size: var(--font-size-xs);
`;
export const Area = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: -0.5px;
  left: 0px;
  background-color: var(--color-white);
  height: 83px;
  overflow: hidden;
`;

// Card
export const Card = styled.div`
  position: relative;
  top: 30px;
  left: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: var(--br-xl);
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.16);
  width: 200px;
  height: 260px;
  overflow: hidden;
`;
