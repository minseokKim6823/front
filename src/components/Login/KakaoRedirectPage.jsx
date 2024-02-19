// KakaoRedirectPage.js

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../AuthContext';

const KakaoRedirectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { handleLoginSuccess } = useAuth();

    useEffect(() => {
        const memberData = localStorage.getItem('memberdata');
        if (memberData) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleOAuthKakao = async (code) => {
        try {
            const response = await axios.get(`http://localhost:8080/oauth/login/kakao?code=${code}`);
            const data = response.data;
            alert("로그인 성공: ");
            localStorage.setItem('memberdata', JSON.stringify(data));
            const memberData = localStorage.getItem('memberdata');
            if (memberData) {
                handleLoginSuccess();
            }
            navigate(`/`);
        } catch (error) {
            alert("로그인에 실패하셨습니다.");
            navigate("/");
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');
        if (code) {
            alert("CODE = " + code);
            handleOAuthKakao(code);
        }
    }, [location]);

    return (
        <>
            <div>
                <div>Processing...</div>
            </div>
        </>
    );
};

export default KakaoRedirectPage;
