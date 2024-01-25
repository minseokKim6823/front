import { IcroundArrowBackIosIcon, Icon, Text1, Div, Div1, Div2, Div3, Wrapper, Div4, Div5, Div6, Div7, Div8, Div9, Frame1, IcroundArrowBackIosIcon1, Div10, Div11, Div12, Div13, Div14, Div15, Div16, Div17, Text2, Div18, Div19, Parent1, Group, DivRoot, CancelButton, RegisterButton, ContentTextarea, PriceInput, TitleInput } from '../assets/BoardWriteCss';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PriceFormat from '../components/BoardWrite/PriceFormat';
import axios from 'axios';

const BoardWrite = () => {
    const navigate = useNavigate();
    const [price, setPrice] = useState(0);
    const [board, setBoard] = useState({
        title: '',
        contents: '',
        price: 0,
        // gender: '',
        // category: '',
        // place: '',
    });

    // 비구조화 할당
    const { title, contents } = board;

    // 이미지 보드에 반영 로직
    const handleImageUpload = (uploadedImages) => {
        setBoard({
            ...board,
            images: uploadedImages,
        });
    };

    // 타이틀, 본문 변경 됨.
    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
        console.log(board);
    };

    // 저장
    const saveBoard = async () => {
        await axios.post(`//localhost:8080/board`, board).then((res) => {
            alert('등록되었습니다.');
            navigate('/board');
        });
    };

    // 취소
    const backToList = () => {
        navigate('/board');
    };


    return (
        <DivRoot>
            <Div19>
                <Div1>
                    <Div>
                        <Text1>사진첨부하기</Text1>
                    </Div>
                    {/* <ImageUpload /> */}
                </Div1>
                {/* 제목 및 카테고리 설정부분 */}
                <Div6>
                    <Div5>
                        <Text1>제목 및 카테고리</Text1>
                    </Div5>
                    <Div4>
                        <Wrapper>
                            <TitleInput type="text" name="title" value={title} onChange={onChange} />
                        </Wrapper>
                    </Div4>
                    {/* <Div2>
                    </Div2> */}
                </Div6>
                {/* 가격 설정 부분 */}
                <Div9>
                    <Div7>
                        <Wrapper>
                            <PriceFormat price={price} setPrice={setPrice} board={board} setBoard={setBoard} />
                        </Wrapper>
                    </Div7>
                    <Div8>
                        <Text1>가격</Text1>
                    </Div8>
                </Div9>
                {/* 상품 설명 부분 */}
                <Div15>
                    <Div14>
                        <Text1>상품 설명</Text1>
                    </Div14>
                    <ContentTextarea type='text' name='contents' value={contents} onChange={onChange} />
                </Div15>
                {/* 위치 설정 부분 */}
                <Div12>
                    <Div11>
                        <Text1>거래희망지역</Text1>
                    </Div11>
                    <Div10>
                        <Frame1>
                            <Div3>위치 설정하기</Div3>
                        </Frame1>
                        <IcroundArrowBackIosIcon1 alt="" src="/icroundarrowbackios.svg" />
                    </Div10>
                </Div12>
                {/* 등록하기 버튼 부분 */}
                <RegisterButton>
                    <Div17>
                        <Div16 />
                    </Div17>
                    <Div18>
                        <Text2>등록하기</Text2>
                    </Div18>
                </RegisterButton>
                {/* 취소하기 버튼 부분 */}
                <CancelButton>
                    <Div17>
                        <Div16 />
                    </Div17>
                    <Div18>
                        <Text2>취소하기</Text2>
                    </Div18>
                </CancelButton>
            </Div19>
        </DivRoot>
    );
};

export default BoardWrite;
