/* Test.js */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Board from '../components/Board';

const Test = () => {
    const { title } = useParams(); // /board/:title와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});
    const getBoard = async () => {
        const resp = await (await axios.get(`//localhost:8080/board/${title}`)).data;
        setBoard(resp.data);
        setLoading(false);
    };

    useEffect(() => {
        getBoard();
    }, []);

    return (
        <div>
            {loading ? (
                <h2>loading...</h2>
            ) : (
                <ul>
                    <li>title:{board.title}</li>
                    <li>writetime:{board.currentTime}</li>
                    <li>content:{board.contents}</li>
                </ul>
            )}
        </div>
    );
};

export default Test;
