import React, { useEffect, useState } from 'react'
import axios from 'axios';

const BoardList = () => {
    const [boardList, setBoardlist] = useState([]);

    const setBoardList = async () => {
        const resp = await (await axios.get('//localhost:8080/board')).data;
        setBoardList(resp.data);
        console.log(boardList);
    }

    // useEffect(() => {
    //     getBoardList();
    // }, []);

    return (
        <div>
            <ul>
                {boardList.map((board) => (
                    // 4) map 함수로 데이터 출력
                    <li key={board.idx}>{board.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default BoardList
