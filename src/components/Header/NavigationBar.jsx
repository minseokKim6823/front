import styled from "styled-components";
import Home from "../../screens/Home";

const Icon = styled.img`
  position: absolute;
  top: calc(50% - 20px);
  left: 20px;
  width: 40px;
  height: 40px;
  overflow: hidden;
`;
const Text1 = styled.b`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  display: flex;
  align-items: center;
`;
const Div = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: 80px;
  background-color: var(--color-gainsboro);
  width: 75px;
  height: 40px;
`;
const Text2 = styled.b`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Div1 = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: 175px;
  background-color: var(--color-gainsboro);
  width: 75px;
  height: 40px;
  text-align: center;
`;
const Div2 = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: 270px;
  background-color: var(--color-gainsboro);
  width: 75px;
  height: 40px;
`;
const Div3 = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  right: 85px;
  background-color: var(--color-gainsboro);
  width: 222px;
  height: 38px;
`;
const Div4 = styled.div`
  position: absolute;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  background-color: var(--color-gray);
  overflow: hidden;
`;
const Div5 = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  right: 17px;
  background-color: var(--color-gainsboro);
  width: 58px;
  height: 38px;
  overflow: hidden;
`;
const Div6 = styled.div`
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
const DivRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1024px;
  overflow-y: auto;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkgray);
  font-family: var(--font-roboto);
`;

const NavigationBar = () => {
    return (
        // <DivRoot>
        <>
            <Div6>
                <Icon alt="" src="/.svg" />
                <Div>
                    <Text1>카테고리</Text1>
                </Div>
                <Div1>
                    <Text2>빌리기</Text2>
                </Div1>
                <Div2>
                    <Text1>빌려주기</Text1>
                </Div2>
                <Div3>
                    <Text1>text</Text1>
                </Div3>
                <Div5>
                    <Div4 />
                </Div5>
            </Div6>
        </>
    );
};

export default NavigationBar;
