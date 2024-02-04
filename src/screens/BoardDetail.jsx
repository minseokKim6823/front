import { useParams } from "react-router-dom";
import { B, Container, ContentTextarea, Div, Div1, Div16, Div2, Div3, Div4, Div5, Div6, Div7, Div8, DivRoot, Frame1, FrameDiv, Icon1, Parent, ProductPhoto, Text, Wrapper } from "../assets/BoardDetailCss/BoardDetailCss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BoardDetail = () => {
  const { id } = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const [error, setError] = useState(null);
  const getBoard = async () => {
    try {
      const resp = await (await axios.get(`//localhost:8080/board/${id}`)).data;
      setBoard(resp.data);
    } catch (e) {
      console.log(e);
      throw (e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <DivRoot>
      <Div16>
        <ProductPhoto alt="이미지 로딩중" src={board.imageUrl} />
        <Div1>
          <Parent>
            <Icon1 alt="유저이미지" src="/.svg" />
            <Wrapper>
              <Div>
                <Text>{board.title}</Text>
              </Div>
            </Wrapper>
          </Parent>
          <Container>
            <B>채팅하기</B>
          </Container>
        </Div1>
        <Div7>
          <Div2>
            <Text>{board.title}</Text>
          </Div2>
          <Div3>
            <Text>{board.gender}</Text>
          </Div3>
          <Div4>
            <Text>{board.clothCategory}</Text>
          </Div4>
          <Frame1>
            <Div6>
              <Text>주소</Text>
            </Div6>
          </Frame1>
        </Div7>
        <FrameDiv>
          <Div8>
            {/* 본문 설명부분 */}
            <ContentTextarea>
              {board.content}
            </ContentTextarea>
          </Div8>
        </FrameDiv>
      </Div16>
    </DivRoot>
  );
};

export default BoardDetail;
