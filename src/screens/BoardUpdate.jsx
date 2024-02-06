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
} from '../assets/BoardWriteCss/BoardWriteCss';
import PriceFormat from '../components/BoardWrite/PriceFormat';
import ImageUpload from '../components/BoardWrite/ImageUpload';
import AWS from 'aws-sdk';
import { B } from '../assets/BoardListCss/BoardlistCss';

const BoardUpdate = () => {
    const navigate = useNavigate();
    const { boardId } = useParams();
    const [price, setPrice] = useState(0);
    const [postImg, setPostImg] = useState([]);
    const [board, setBoard] = useState({
        title: '',
        contents: '',
        price: 0,
        gender: '',
        clothCategory: '',
        place: '',
        currentTime: new Date(),
        postImg: '',
    });

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

        await axios.patch(`//localhost:8080/update`, updatedBoard).then((res) => {
            alert('수정되었습니다.');
            navigate('/board/' + boardId);
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
        <DivRoot>
            <Div17>
                <Div1>
                    <Div>
                        <Text>사진첨부하기</Text>
                    </Div>
                    <ImageUpload
                        name='postImg'
                        board={board}
                        setBoard={setBoard}
                        postImg={postImg}
                        setPostImg={setPostImg}
                    />
                </Div1>
                <Div7>
                    <Div4>
                        <Text>제목 및 카테고리</Text>
                    </Div4>
                    <Div3>
                        <Wrapper>
                            <TitleInput
                                placeholder='제목을 입력해주세요'
                                type='text'
                                name='title'
                                value={title}
                                onChange={onChange}
                            />
                        </Wrapper>
                    </Div3>
                    <GenderDropdown name='gender' board={board} setBoard={setBoard} />
                    <Div6 />
                    <ClothingDropdown name='clothCategory' board={board} setBoard={setBoard} />
                </Div7>
                <Div16>
                    <Registerbutton onClick={updateBoard}>
                        <B>수정하기</B>
                    </Registerbutton>
                    <Cancelbutton onClick={backToList}>
                        <B>취소하기</B>
                    </Cancelbutton>
                </Div16>
            </Div17>
        </DivRoot>
    );
};

export default BoardUpdate;
