import React, { useState, useEffect } from "react";

const CurrentDateComponent = () => {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        // 현재 날짜 객체 생성
        const today = new Date();

        // 원하는 날짜 형식으로 포맷팅 (예: "2/08/2023")
        const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

        // 상태 업데이트
        setCurrentDate(formattedDate);
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

    return (
        <div>
            <h2>현재 날짜: {currentDate}</h2>
        </div>
    );
}

export default CurrentDateComponent;
