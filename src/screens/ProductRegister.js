import GenderDropdown from "../components/BoardWrite/GenderDropdown";
import ClothingDropdown from "../components/BoardWrite/ClothingDropdown";
import { Div, Div1, Div10, Div11, Div12, Div14, Div15, Div16, Div17, Div2, Div3, Div4, Div6, Div7, Div8, Div9, DivRoot, Icon, Text1, Wrapper, Text, VectorIcon, Div21, Icon1, Wrapper4, Div18, Wrapper5, Div19, Text2, Wrapper6, Wrapper7, Wrapper8, B, Div13, Div20, IcroundArrowBackIos, Inner, Wrapper1, Wrapper2, Wrapper3, TitleInput, ContentTextarea, Cancelbutton, Registerbutton } from "../assets/ProductRegisterCss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ImageUpDelete from "../components/BoardWrite/ImageUpDelete";
import PriceFormat from "../components/BoardWrite/PriceFormat";
import axios, { Axios } from "axios";
import { CancelButton } from "../assets/BoardWriteCss";

const ProductRegister = () => {
  const navigate = useNavigate();
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
  });

  // 비구조화 할당
  const { title, contents, place } = board;

  // 이미지 업로드
  const handleImageUpload = async (uploadedImages) => {
    // FormData 생성
    const formData = new FormData();
    // 업로드된 이미지를 FormData에 추가
    uploadedImages.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });
    try {
      // Axios를 사용하여 백엔드에 이미지 업로드
      const response = await axios.post('//localhost:8080/board', formData);
      // 성공 시 처리
      alert('등록되었습니다.');
      navigate('/Home');
      console.log(response.data);
    } catch (error) {
      // 실패 시 처리
      console.error(error);
    }
  };

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
    await handleImageUpload(postImg);
    await axios.post(`//localhost:8080/board`, board).then((res) => {
      alert('등록되었습니다.');
      navigate('/board');
    });
  };

  // 취소
  const backToList = () => {
    navigate('/');
  };

  return (
    <DivRoot>
      <Div17>
        <Div1>
          <Div>
            <Text>사진첨부하기</Text>
          </Div>
          <ImageUpDelete name='postImg' board={board} setBoard={setBoard}
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
          <Div6 />
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
            {/* 위치 설정 박스 */}
            {/* <Wrapper>
              <Div2>위치 설정하기</Div2>
            </Wrapper> */}
            {/* <IcroundArrowBackIos> */}
            {/* <VectorIcon alt="" src="/vector.svg" /> */}
            {/* </IcroundArrowBackIos> */}
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
    </DivRoot>
  );
};

export default ProductRegister;
