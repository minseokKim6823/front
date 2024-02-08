import GenderDropdown from "../components/BoardWrite/GenderDropdown";
import ClothingDropdown from "../components/BoardWrite/ClothingDropdown";
import { Div, Div1, Div12, Div14, Div15, Div16, Div17, Div3, Div4, Div6, Div7, Div8, Div9, DivRoot, Text1, Wrapper, Text, B, Div13, TitleInput, ContentTextarea, Cancelbutton, Registerbutton } from "../assets/BoardWriteCss/BoardWriteCss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PriceFormat from "../components/BoardWrite/PriceFormat";
import axios from "axios";
import ImageUpload from "../components/BoardWrite/ImageUpload";
import AWS from 'aws-sdk';

const BoardWrite = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [serverId, setId] = useState(-1);
  const [price, setPrice] = useState(0);
  const [postImg, setPostImg] = useState([]);
  const [board, setBoard] = useState({
    serverid: '-1',
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
        serverid: parsedData.serverId
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
    console.log(board);
  };

  // 저장
  const saveBoard = async () => {
    const UploadedImageURLs = await handleImageUpload(postImg);

    // Update board with the uploadedImageURLs
    const updatedBoard = {
      ...board,
      postImg: UploadedImageURLs, // Assuming 'postImg' is the field to store image URLs in your board
    };
    console.log(UploadedImageURLs);
    await axios.post(`//localhost:8080/board/write`, board).then((res) => {
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
