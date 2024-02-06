import { useParams } from "react-router-dom";
import { B, Container, ContentTextarea, Div, Div1, Div16, Div2, Div3, Div4, Div5, Div6, Div7, Div8, DivRoot, Frame1, FrameDiv, Icon1, Parent, ProductPhoto, Text, Wrapper } from "../assets/BoardDetailCss/BoardDetailCss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Board from './Board';

const BoardDetail = () => {
  const { boardId } = useParams();
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const [error, setError] = useState(null);
  const getBoard = async () => {
    try {
      const resp = await (await axios.get(`//localhost:8080/board/${boardId}`)).data;
<<<<<<< HEAD
      console.log(resp);
=======
>>>>>>> 7c59a51 (test1)
      setBoard(resp);
    } catch (e) {

      console.log(e);
      throw (e);
    }
    setLoading(false);
  };

  useEffect(() => {
<<<<<<< HEAD
    console.log(3);
=======
    console.log(boardId);
>>>>>>> 7c59a51 (test1)
    getBoard();
  }, []);

  return (
    <>
      <Board
<<<<<<< HEAD
        postImg={board.postImg}
=======
>>>>>>> 7c59a51 (test1)
        severId={board.severId}
        boardId={board.boardId}
        profileImage={board.profileImage}
        nickname={board.nickname}
        title={board.title}
        contents={board.contents}
        clothCategory={board.clothCategory}
        gender={board.gender}
      />
    </>
  );
};

export default BoardDetail;
