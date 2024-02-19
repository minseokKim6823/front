import React from 'react';
import GenderDropdown from "../components/BoardWrite/GenderDropdown";
import ClothingDropdown from "../components/BoardWrite/ClothingDropdown";
import { Div, Div1, Div12, Div14, Div15, Div16, Div17, Div3, Div4, Div6, Div7, Div8, Div9, DivRoot, Text1, Wrapper, Text, B, Div13, TitleInput, ContentTextarea, Cancelbutton, Registerbutton, ModalTolocation, ModalBackground, ModalContainer, ModalContent, LocateDiv } from "../assets/BoardWriteCss/BoardWriteCss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PriceFormat from "../components/BoardWrite/PriceFormat";
import axios from "axios";
import ImageUpload from "../components/BoardWrite/ImageUpload";
import AWS from 'aws-sdk';
import BoardWriteMap from '../Map/BoardWriteMap';

const BoardWrite = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [serverId, setId] = useState(-1);
  const [price, setPrice] = useState(0);
  const [postImg, setPostImg] = useState([]);
  const [position, setPosition] = useState({ lat: 37.5665, lng: 126.978 });
  const [address, setAddress] = useState('');
  const [board, setBoard] = useState({
    serverId: '-1',
    title: '',
    contents: '',
    address: '',
    gender: '',
    clothCategory: '',
    place: '',
    currentTime: new Date(),
    postImg: '',
    position: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  // 로컬스토리지에서 유저 정보 가져오기
  useEffect(() => {
    const memberInfo = localStorage.getItem('memberdata');
    if (memberInfo) {
      // memberInfo 있으면 파싱하여 상태 업데이트
      const parsedData = JSON.parse(memberInfo);
      setNickname(memberInfo.nickname);
      setId(parsedData.serverId);
      setBoard(prevBoard => ({
        ...prevBoard,
        serverId: parsedData.serverId
      }));
    }
  }, []);

  // 비구조화 할당
  const { title, contents, place } = board;

  // 타이틀, 본문 보드에 반영
  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  // 수정된 saveBoard 함수
  const saveBoard = async () => {
    // Check if any required fields are empty
    if (postImg.length === 0 || title.trim() === '' || contents.trim() === '' || board.gender.trim() === '성별' || board.clothCategory.trim() === '의류 카테고리' || price === 0 || address.trim() === '') {
      // Modified board.gender and board.clothCategory, added price and place check
      let errorMessage = '다음 요건을 충족해주세요:';
      if (postImg.length === 0) errorMessage += '\n- 이미지 최소 1장 이상 등록해주세요.';
      if (title.trim() === '') errorMessage += '\n- 제목을 입력해주세요.';
      if (contents.trim() === '') errorMessage += '\n- 본문을 작성해주세요.';
      if (board.gender.trim() === '성별') errorMessage += '\n- 성별을 선택해주세요.';
      if (board.clothCategory.trim() === '의류 카테고리') errorMessage += '\n- 의류 카테고리 선택해주세요.';
      if (price === 0) errorMessage += '\n- 가격을 입력해주세요.';
      if (address.trim() === '') errorMessage += '\n- 거래 희망 지역을 마커로 설정해주세요.';
      alert(errorMessage);
      return;
    }

    const UploadedImageURLs = await handleImageUpload(postImg);
    const updatedBoard = {
      ...board,
      postImg: UploadedImageURLs, // Assuming 'postImg' is the field to store image URLs in your board
    };
    console.log(UploadedImageURLs);
    await axios.post(`//localhost:8080/board/write`, updatedBoard).then((res) => {
      alert('등록되었습니다.');
      navigate('/board');
    });
  };



  // 이미지 업로드
  const handleImageUpload = async (uploadedImages) => {
    // AWS S3 설정
    const s3 = new AWS.S3({
      accessKeyId: 'AKIAYS2NXFTD43W3T2H3',
      secretAccessKey: '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',
      region: 'ap-northeast-2',
    });
    const uploadedImageURLs = [];
    // S3에 업로드할 파라미터 설정
    for (let i = 0; i < postImg.length; i++) {
      const params = {
        Bucket: 'gscproject',
        Key: `images/${postImg[i].name}`,
        Body: postImg[i],
        ACL: 'public-read',
      };
      // S3에 파일 업로드
      await s3.upload(params).promise().then((response) => {
        // 이미지 URL을 문자열로 변환
        const imageURLString = String(response.Location);
        // 여기에서 이미지 업로드 후 필요한 작업 수행
        uploadedImageURLs.push(imageURLString);
        console.log(uploadedImageURLs[0]);
      }).catch((err) => {
        console.error(err);
      });
    }
    return uploadedImageURLs;
  };

  // 취소
  const backToList = () => {
    navigate('/');
  };

  // Open modal function
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            {/* <Wrapper> */}
            <TitleInput placeholder="제목을 입력해주세요"
              type="text" name="title" value={title} onChange={onChange}
            />
            {/* </Wrapper> */}
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
        <LocateDiv>
          <Div15>
            <Text1>거래희망지역</Text1>
          </Div15>
          <Div14>
            <TitleInput placeholder="원하시는 거래위치로 드래그해주세요"
              type="text" name="place" value={address} onChange={onChange} />
          </Div14>
          <BoardWriteMap position={position} setPosition={setPosition} address={address} setAddress={setAddress} board={board} setBoard={setBoard} />
        </LocateDiv>
        <Div16>
          <Registerbutton onClick={saveBoard}>
            <B>등록하기</B>
          </Registerbutton>
          <Cancelbutton onClick={backToList}>
            <B>취소하기</B>
          </Cancelbutton>
        </Div16>
      </Div17>
    </>
  );
};

export default BoardWrite;
