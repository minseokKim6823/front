import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ClothingDropdownWrapper = styled.div`
  position: relative;
  margin: none;
  top: 47%;
  height: 35px;
  left: 40%;
  background-color: #e0e0e0;
  border: 1px solid var(--color-whitesmoke-200);
  border: none;
  box-sizing: border-box;
  width: 234px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: none;
  gap: none;
  z-index: 2;
`;

const DropdownToggle = styled.div`
  position: absolute;
  padding: none;
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #e0e0e0;
  cursor: pointer;
`;

const DropdownOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
  width: 234px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;

  div {
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const ClothingDropdown = ({ board, setBoard }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategorySelect = selectedCategory => {
        setBoard({ ...board, clothCategory: selectedCategory });
        setIsDropdownOpen(false);
    };

    const handleClickOutside = event => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <ClothingDropdownWrapper ref={dropdownRef}>
            <DropdownToggle onClick={handleDropdownToggle}>
                {board.clothCategory ? board.clothCategory : '의류 카테고리'}
            </DropdownToggle>
            <DropdownOptions isOpen={isDropdownOpen}>
                <div onClick={() => handleCategorySelect('상의')}>상의</div>
                <div onClick={() => handleCategorySelect('하의')}>하의</div>
                <div onClick={() => handleCategorySelect('아우터')}>아우터</div>
            </DropdownOptions>
        </ClothingDropdownWrapper>
    );
};

export default ClothingDropdown;
