import React, { useState } from 'react';


const SeoulDistrictSelector = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const seoulDistricts = ['Gangnam', 'Mapo', 'Jongno', 'etc.']; // 서울의 구 목록을 배열로 정의하세요.

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    closeModal(); // 구 선택 후 모달을 닫습니다.
  };

  return (
    <div>
      <button onClick={openModal}>모달 열기</button>

      <modal
        isOpen={showModal}
        onRequestClose={closeModal} // The prop might be 'onRequestClose' instead of 'onClose' depending on the library
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background overlay color
          },
          content: {
            width: '50%', // Adjust the width of the modal content
            margin: 'auto', // Center the modal horizontally
            padding: '20px', // Add padding to the modal content
            borderRadius: '8px', // Optional: Add border radius for rounded corners
          },
        }}
      >
        <h2>서울 구 선택</h2>
        <ul>
          {seoulDistricts.map((district, index) => (
            <li key={index} onClick={() => handleDistrictSelect(district)}>
              {district}
            </li>
          ))}
        </ul>
      </modal>

      {selectedDistrict && (
        <p>선택한 구: {selectedDistrict}</p>
      )}
    </div>
  );
};

export default SeoulDistrictSelector;
