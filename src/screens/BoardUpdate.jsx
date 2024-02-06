import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import GenderDropdown from '../components/BoardWrite/GenderDropdown';
import ClothingDropdown from '../components/BoardWrite/ClothingDropdown';
import {
    DivRoot,
    Div17,
    Div1,
    Div7,
    Div4,
    Div3,
    Wrapper,
    TitleInput,
    Text,
    Text1,
    ContentTextarea,
    Cancelbutton,
    Registerbutton,
    Div16,
    Div6,
    Div,
    Div9,
    Div8,
    Div13,
    Div12,
    Div15,
    Div14
} from '../assets/BoardWriteCss/BoardWriteCss';
import PriceFormat from '../components/BoardWrite/PriceFormat';
import ImageUpload from '../components/BoardWrite/ImageUpload';
import AWS from 'aws-sdk';
import { B } from '../assets/BoardListCss/BoardlistCss';

const BoardUpdate = () => {
    const navigate = useNavigate();
    const { boardId } = useParams();
    const [nickname, setNickname] = useState('');
    const [serverId, setId] = useState(-1);
    const [price, setPrice] = useState(0);
    const [postImg, setPostImg] = useState([]);
    const [board, setBoard] = useState({
        severId: '-1',
        title: '',
        contents: '',
        price: 0,
        gender: '',
        clothCategory: '',
        place: '',
        currentTime: new Date(),
        postImg: '',
    });

    // 로컬스토리지에서 유저 정보 가져오기
    useEffect(() => {
        const memberInfo = localStorage.getItem('memberdata');
        if (memberInfo) {
            // memberInfo 있으면 파싱하여 상태 업데이트
            const parsedData = JSON.parse(memberInfo);
            //   console(parsedData);
            setNickname(memberInfo.nickname);
            setId(parsedData.serverId);
            setBoard(prevBoard => ({
                ...prevBoard,
                serverId: serverId
            }));
        }
    }, []);

    const { title, contents, place } = board;

    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const getBoard = async () => {
        const resp = await axios.get(`//localhost:8080/board/${boardId}`);
        setBoard(resp.data);
    };

    const updateBoard = async () => {
        const UploadedImageURLs = await handleImageUpload(postImg);

        const updatedBoard = {
            ...board,
            postImg: UploadedImageURLs,
        };

        await axios.post(`//localhost:8080/board/update`, updatedBoard).then((res) => {
            alert('수정되었습니다.');
            navigate('/profile');
        });
    };

    const handleImageUpload = async (uploadedImages) => {
        const s3 = new AWS.S3({
            accessKeyId: 'AKIAYS2NXFTD43W3T2H3',
            secretAccessKey: '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',
            region: 'ap-northeast-2',
        });
        const uploadedImageURLs = [];

        for (let i = 0; i < postImg.length; i++) {
            const params = {
                Bucket: 'gscproject',
                Key: `images/${postImg[i].name}`,
                Body: postImg[i],
                ACL: 'public-read',
            };

            await s3.upload(params).promise().then((response) => {
                const imageURLString = String(response.Location);
                uploadedImageURLs.push(imageURLString);
            }).catch((err) => {
                console.error(err);
            });
        }

        return uploadedImageURLs;
    };

    const backToList = () => {
        navigate('/');
    };

    useEffect(() => {
        getBoard();
    }, []);

    return (
        <>
            <Div17>
                <Div1>
                    <Div>
                        <Text>사진첨부</Text>
                    </Div>
                    <ImageUpload name='postImg' board={board} setBoard={setBoard}
                        postImg={postImg} setPostImg={setPostImg} />
                </Div1>
                <Div7>
                    <Div4>
                        <Text>제목 및 카테고리</Text>
                    </Div4>
                    {/* 제목 입력부분 */}
                    <Div3>
                        <Wrapper>
                            <TitleInput placeholder="제목을 입력해주세요"
                                type="text" name="title" value={title} onChange={onChange}
                            />
                        </Wrapper>
                    </Div3>
                    {/* 성별 드롭다운 */}
                    <GenderDropdown name='gender' board={board} setBoard={setBoard} />
                    <ClothingDropdown name='clothCategory' board={board} setBoard={setBoard} />
                </Div7>
                <Div9>
                    <Div8>
                        <Text1>가격</Text1>
                    </Div8>
                    <Div3>
                        <Wrapper>
                            {/* 가격 입력부분 */}
                            <PriceFormat price={price} setPrice={setPrice} board={board} setBoard={setBoard} />
                        </Wrapper>
                    </Div3>
                </Div9>
                <Div13>
                    <Div12>
                        <Text1>상품 설명</Text1>
                    </Div12>
                    {/* 상품 설명 부분 */}
                    <ContentTextarea placeholder="본문을 작성해주세요" type='text' name='contents' value={contents} onChange={onChange}
                    />
                </Div13>
                <Div9>
                    <Div15>
                        <Text1>거래희망지역</Text1>
                    </Div15>
                    <Div14>
                        <TitleInput placeholder="위치를 입력해주세요"
                            type="text" name="place" value={place} onChange={onChange} />
                    </Div14>
                </Div9>
                <Div16>
                    <Registerbutton onClick={updateBoard}>
                        <B>수정하기</B>
                    </Registerbutton>
                    <Cancelbutton onClick={backToList}>
                        <B>취소하기</B>
                    </Cancelbutton>
                </Div16>
            </Div17>
        </>
    );
};

export default BoardUpdate;
