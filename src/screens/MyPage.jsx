import { useNavigate } from "react-router-dom";
import { Div3, Icon, Div, Text1, Container, Div1, Text2, Frame1, FrameDiv, B, Wrapper1, Inner, Wrapper2, Div2, Div13, Wrapper, Div5, Wrapper3, Wrapper4, Icon1, Div4, Div6, Div12, Card, PicIcon, Area, B1, Parent1, Div7, Div8, Div9, Div10, Div11, Text3, Card1, Card2, ButtonArea, UpdateButton, DeleteButton } from "../assets/MyPageCss/MyPageCss";

const MyPage = () => {
  const Navigate = useNavigate();
  const navigateToUpdate = () => {
    Navigate('/update/:boardId')
  }
  const navigateToDelete = () => {
    Navigate('/update/:boardId')
  }
  // severid 보내기
  // board 불러오기
  return (
    <>
      <Div13>
        <Div5>
          <Icon1 alt="" src="/.svg" />
          <Wrapper3>
            <Div4>
              <Text1>유저명</Text1>
            </Div4>
          </Wrapper3>
        </Div5>
        <Wrapper4>
          <Div6>
            <Text1>판매중인 상품</Text1>
          </Div6>
        </Wrapper4>
        {/* {Board.map((item) => ( */}
        <Card>
          <PicIcon alt="" src="/pic@2x.png" />
          <Area>
            <B1>이런 옷</B1>
            <Parent1>
              <Div7>카테고리1</Div7>
              <Div8>{`>`}</Div8>
              <Div9>카테고리2</Div9>
            </Parent1>
            <Div11>
              <Text3>5,300원</Text3>
            </Div11>
          </Area>
          <ButtonArea>
            <UpdateButton onClick={navigateToUpdate}>수정하기</UpdateButton>
            <DeleteButton onClick={navigateToDelete}>삭제하기</DeleteButton>
          </ButtonArea>
        </Card>
        {/* ))} */}
      </Div13>
    </>
  );
};

export default MyPage;
