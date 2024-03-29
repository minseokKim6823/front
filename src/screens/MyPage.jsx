import { Link, useNavigate } from "react-router-dom";
import { Div3, Icon, Div, Text1, Container, Div1, Text2, Frame1, FrameDiv, B, Wrapper1, Inner, Wrapper2, Div2, Div13, Wrapper, Div5, Wrapper3, Wrapper4, Icon1, Div4, Div6, Div12, Card, PicIcon, Area, B1, Parent1, Div7, Div8, Div9, Div10, Div11, Text3, Card1, Card2, ButtonArea, UpdateButton, DeleteButton } from "../assets/MyPageCss/MyPageCss";
import { useEffect, useState } from "react";
import axios from "axios";

const MyPage = () => {
  const Navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [board, setBoard] = useState([]);
  const [user, setUser] = useState({
    severId: -1,
  });

  const navigateToUpdate = (boardId) => {
    Navigate('/update/' + boardId);
  }

  const navigateToLogin = () => {
    Navigate('/login');
  }

  // 서버에서 유저에 맞는 보드 가져오기
  const searchBoard = async () => {
    const { severId } = user;
    try {
      const response = await axios.get(`//localhost:8080/board/search?query`, {
        params: { severId },
      });
      setBoard(response.data);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류 발생:", error);
    }
  };

  // 로컬스토리지에서 유저 정보 가져오기
  useEffect(() => {
    const memberInfo = localStorage.getItem('memberdata');
    if (memberInfo) {
      // memberInfo 있으면 파싱하여 상태 업데이트
      const parsedData = JSON.parse(memberInfo);
      //   console(parsedData);
      setNickname(parsedData.nickname);
      setProfileImage(parsedData.profileImage);
      setUser(prevUser => ({
        ...prevUser,
        serverId: parsedData.serverId
      }));
      console.log('User 반영 성공');
      // 서버아이디로 보드 불러오기
      searchBoard();
      if (board) {
        console.log('보드 가져오기 성공');
      }
    }
    else {
      alert("로그인 해야합니다.");
      navigateToLogin();
    }
  }, []);

  // 삭제 로직
  const handleDelete = async (boardId) => {
    try {
      const response = await axios.delete(`//localhost:8080/board/delete/${boardId}`);
      if (response.status === 200) {
        window.confirm("삭제하시겠습니까?");
        // 삭제 성공 시, 해당 게시물을 화면에서도 삭제하도록 업데이트
        setBoard(prevBoard => prevBoard.filter(item => item.boardId !== boardId));
      }
    } catch (error) {
      console.error("게시물 삭제 중 오류 발생:", error);
    }
  };

  return (
    <>
      <Div13>
        <Div5>
          <Icon1 alt="이미지로딩중" src={profileImage} />
          <Wrapper3>
            <Div4>
              <Text1>{`${nickname}`}</Text1>
            </Div4>
          </Wrapper3>
        </Div5>
        <Wrapper4>
          <Div6>
            <Text1>판매중인 상품</Text1>
          </Div6>
        </Wrapper4>
        {board && board.map((item) => (
          <Card key={item.boardId}>
            {/* <Link to={`/board/${item.boardId}`}> */}
            <PicIcon src={item.postImg[0]} alt="이미지 로딩중" />
            <Area>
              <B1>{item.title}</B1>
              <Parent1>
                <Div7>{item.gender}</Div7>
                <Div8>{`>`}</Div8>
                <Div9>{item.clothCategory}</Div9>
              </Parent1>
              <Div11>
                <Text3>{`${item.price}원`}</Text3>
              </Div11>
            </Area>
            <ButtonArea>
              <UpdateButton onClick={() => navigateToUpdate(item.boardId)}>수정하기</UpdateButton>
              <DeleteButton onClick={() => handleDelete(item.boardId)}>삭제하기</DeleteButton>
            </ButtonArea>
            {/* </Link> */}
          </Card>
        ))}
      </Div13>
    </>
  );
};

export default MyPage;
