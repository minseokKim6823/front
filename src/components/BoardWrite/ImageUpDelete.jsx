import React, { useState } from 'react';
import styled from 'styled-components';

const ImageUploadLabel = styled.label`
  display: inline-block;
  left: 15px;
  width: 100px;
  height: 100px;
  top: 50px;
  background: url('src/assets/icon-add-photo.svg') no-repeat;
  background-position: center;
  border: 1px solid ${props => props.theme.gray4};
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: visible;
`;

const ImageUploadInput = styled.input`
  display: none;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  left: 130px;
  top: 50px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid ${props => props.theme.gray4};
  border-radius: 10px;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const ImageUpDelete = ({ postImg, setPostImg, board, setBoard }) => {
    // const [postImg, setPostImg] = useState([]);
    const [previewImg, setPreviewImg] = useState([]);

    function uploadFile(e) {
        const fileArr = e.target.files;
        setPostImg(Array.from(fileArr));
        setBoard(prevBoard => ({
            ...prevBoard,
            postImg: Array.from(fileArr),
        }));

        const fileUrl = [];
        for (let i = 0; i < fileArr.length; i++) {
            const fileRead = new FileReader();
            fileRead.onload = function () {
                fileUrl[i] = fileRead.result;
                setPreviewImg(prevPreviewImg => [...prevPreviewImg, fileRead.result]);
            };
            fileRead.readAsDataURL(fileArr[i]);
        }
    }


    const removeImage = (index) => {
        const updatedPreviewImg = [...previewImg];
        updatedPreviewImg.splice(index, 1);
        setPreviewImg(updatedPreviewImg);

        setPostImg(updatedPreviewImg); // Update postImg when removing an image
        setBoard(prevBoard => ({
            ...prevBoard,
            postImg: updatedPreviewImg,
        }));
    };

    return (
        <div>
            <ImageUploadLabel htmlFor="fileInput">
                {previewImg.length === 0 ? '이미지 업로드' : `업로드 이미지 수: ${previewImg.length}/3`}
            </ImageUploadLabel>
            <ImageUploadInput id="fileInput" type="file" onChange={uploadFile} multiple />
            <ImagePreviewContainer>
                {previewImg.map((url, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        <ImagePreview src={url} alt={`preview-${index}`} />
                        <RemoveButton onClick={() => removeImage(index)}>X</RemoveButton>
                    </div>
                ))}
            </ImagePreviewContainer>
        </div>
    );
};

export default ImageUpDelete;
