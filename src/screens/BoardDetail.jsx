import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Board from './Board';

const BoardDetail = () => {
  const { boardId } = useParams();
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(11212)
    const getBoard = async () => {
      try {
        const resp = await axios.get(`//localhost:8080/board/${boardId}`);
        setBoard(resp.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setError(e);
        setLoading(false);
      }
    };
    getBoard();
  }, [boardId]); // boardId가 변경될 때마다 호출되도록 수정

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Board
          postImg={board.postImg}
          severId={board.serverId}
          profileImage={board.profileImage}
          nickname={board.nickname}
          title={board.title}
          contents={board.contents}
          clothCategory={board.clothCategory}
          gender={board.gender}
          place={board.place}
          address={board.address}
        />
      )}
      {error && <div>Error: {error.message}</div>}
    </>
  );
};

export default BoardDetail;
