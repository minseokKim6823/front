import styled from "styled-components";

const B = styled.b`
  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  top: calc(50% - 21px);
  right: 14px;
  border-radius: 6px;
  background-color: var(--g-blue);
  width: 96px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 0px;
  box-sizing: border-box;
  text-align: center;
`;
const Icon = styled.img`
  position: absolute;
  top: calc(50% - 24px);
  left: 63.66px;
  width: 50px;
  height: 50px;
`;
const Div = styled.div`
  position: relative;
  font-weight: 600;
`;
const Container = styled.div`
  position: absolute;
  top: 15px;
  left: 124px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.9);
`;
const Text1 = styled.div`
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
const Div1 = styled.div`
  width: 54px;
  position: relative;
  height: 24px;
`;
const Frame1 = styled.div`
  position: absolute;
  top: 43px;
  left: 124px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  color: var(--g-red);
`;
const VectorIcon = styled.img`
  width: 15.66px;
  position: relative;
  height: 27.37px;
`;
const IcroundArrowBackIos = styled.div`
  position: absolute;
  top: calc(50% - 24px);
  left: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) 15px;
`;
const Div2 = styled.div`
  align-self: stretch;
  position: relative;
  border: 1px solid var(--color-darkgray);
  box-sizing: border-box;
  height: 78px;
  z-index: 0;
`;
const FrameChild = styled.img`
  width: 32px;
  position: relative;
  border-radius: 50%;
  height: 32px;
  object-fit: cover;
`;
const Div3 = styled.div`
  position: relative;
  line-height: 20px;
`;
const FrameDiv = styled.div`
  border-radius: 0px var(--br-base) var(--br-base) var(--br-base);
  background-color: var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
`;
const P = styled.p`
  margin: 0;
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const EllipseParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Wrapper1 = styled.div`
  border-radius: var(--br-base) 0px var(--br-base) var(--br-base);
  background-color: var(--color-blueviolet);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--color-white);
`;
const FrameParent = styled.div`
  align-self: stretch;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px 0px 0px;
  gap: 24px;
`;
const Inner = styled.div`
  align-self: stretch;
  flex: 1;
  border: 1px solid var(--color-darkgray);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  z-index: 1;
  color: var(--color-black);
`;
const Div4 = styled.div`
  flex: 1;
  position: relative;
  line-height: 20px;
`;
const Wrapper2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px var(--padding-3xs);
`;
const SendIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const SendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
`;
const FrameParent1 = styled.div`
  width: 100%;
  margin: 0 !important;
  position: absolute;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 3px 4px;
  box-sizing: border-box;
  gap: 4px;
  z-index: 2;
  font-size: var(--font-size-base);
  color: rgba(0, 0, 0, 0.7);
`;
const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-mid);
  color: var(--color-white);
  font-family: var(--font-roboto);
`;

const Chating = () => {
  return (
    <>
      <Div2>
        <Wrapper>
          <B>거래확정</B>
        </Wrapper>
        <Icon alt="" src="/.svg" />
        <Container>
          <Div>여기에 제목이 들어갑니다</Div>
        </Container>
        <Frame1>
          <Div1>
            <Text1>5,300원</Text1>
          </Div1>
        </Frame1>
        <IcroundArrowBackIos>
          <VectorIcon alt="" src="/vector.svg" />
        </IcroundArrowBackIos>
      </Div2>
      <Inner>
        <FrameParent>
          <EllipseParent>
            <FrameChild alt="" src="/ellipse-17@2x.png" />
            <FrameGroup>
              <FrameDiv>
                <Div3>여 뭐해!</Div3>
              </FrameDiv>
              <FrameDiv>
                <Div3>
                  <P>다음 대사가 들어갑니다</P>
                  <P>두줄입니다</P>
                </Div3>
              </FrameDiv>
              <FrameWrapper>
                <FrameDiv>
                  <Div3>이곳은 마지막 대사</Div3>
                </FrameDiv>
              </FrameWrapper>
            </FrameGroup>
          </EllipseParent>
          <FrameContainer>
            <Wrapper1>
              <Div3>여 뭐해!</Div3>
            </Wrapper1>
            <Wrapper1>
              <Div3>
                <P>다음 대사가 들어갑니다</P>
                <P>두줄입니다</P>
              </Div3>
            </Wrapper1>
            <FrameWrapper>
              <Wrapper1>
                <Div3>이곳은 마지막 대사</Div3>
              </Wrapper1>
            </FrameWrapper>
          </FrameContainer>
          <EllipseParent>
            <FrameChild alt="" src="/ellipse-17@2x.png" />
            <FrameGroup>
              <FrameDiv>
                <Div3>오진짜?</Div3>
              </FrameDiv>
              <FrameWrapper>
                <FrameDiv>
                  <Div3>이곳은 마지막 대사</Div3>
                </FrameDiv>
              </FrameWrapper>
            </FrameGroup>
          </EllipseParent>
          <FrameContainer>
            <Wrapper1>
              <Div3>여 뭐해!</Div3>
            </Wrapper1>
            <Wrapper1>
              <Div3>
                <P>다음 대사가 들어갑니다</P>
                <P>두줄입니다</P>
              </Div3>
            </Wrapper1>
            <FrameWrapper>
              <Wrapper1>
                <Div3>이곳은 마지막 대사</Div3>
              </Wrapper1>
            </FrameWrapper>
          </FrameContainer>
          <EllipseParent>
            <FrameChild alt="" src="/ellipse-17@2x.png" />
            <FrameGroup>
              <FrameDiv>
                <Div3>오진짜?</Div3>
              </FrameDiv>
              <FrameWrapper>
                <FrameDiv>
                  <Div3>이곳은 마지막 대사</Div3>
                </FrameDiv>
              </FrameWrapper>
            </FrameGroup>
          </EllipseParent>
          <FrameContainer>
            <Wrapper1>
              <Div3>여 뭐해!</Div3>
            </Wrapper1>
            <Wrapper1>
              <Div3>
                <P>다음 대사가 들어갑니다</P>
                <P>두줄입니다</P>
              </Div3>
            </Wrapper1>
            <FrameWrapper>
              <Wrapper1>
                <Div3>이곳은 마지막 대사</Div3>
              </Wrapper1>
            </FrameWrapper>
          </FrameContainer>
          <EllipseParent>
            <FrameChild alt="" src="/ellipse-17@2x.png" />
            <FrameGroup>
              <FrameDiv>
                <Div3>오진짜?</Div3>
              </FrameDiv>
              <FrameWrapper>
                <FrameDiv>
                  <Div3>이곳은 마지막 대사</Div3>
                </FrameDiv>
              </FrameWrapper>
            </FrameGroup>
          </EllipseParent>
          <FrameContainer>
            <Wrapper1>
              <Div3>여 뭐해!</Div3>
            </Wrapper1>
            <Wrapper1>
              <Div3>
                <P>다음 대사가 들어갑니다</P>
                <P>두줄입니다</P>
              </Div3>
            </Wrapper1>
            <FrameWrapper>
              <Wrapper1>
                <Div3>이곳은 마지막 대사</Div3>
              </Wrapper1>
            </FrameWrapper>
          </FrameContainer>
        </FrameParent>
      </Inner>
      <FrameParent1>
        <Wrapper2>
          <Div4>메시지를 입력하세요</Div4>
        </Wrapper2>
        <SendWrapper>
          <SendIcon alt="" src="/send@2x.png" />
        </SendWrapper>
      </FrameParent1>
    </>
  );
};

export default Chating;
