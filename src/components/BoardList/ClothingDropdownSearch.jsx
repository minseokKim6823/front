import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ClothingDropdownWrapper = styled.div`
  position: absolute;
  top: 79px;
  left: calc(50% - 96px);
  border-radius: var(--br-5xs);
  background-color: white;
  border: 1px solid white;
  box-sizing: border-box;
  width: 234px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-3xs);
  gap: var(--gap-mini);
  z-index: 1;
`;

const DropdownToggle = styled.div`
  padding: 10px;
  width: 200px;
  background-color: #e0e0e0;
  cursor: pointer;
`;

const DropdownOptions = styled.div`
  position: absolute;
  top: 33px;
  left: 7px;
  width: 220px;
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

const ClothingDropdownSearch = ({ search, setSearch }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategorySelect = selectedCategory => {
        setSearch({ ...search, clothCategory: selectedCategory });
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
                {search.clothCategory ? search.clothCategory : '의류 카테고리'}
            </DropdownToggle>
            <DropdownOptions isOpen={isDropdownOpen}>
                <div onClick={() => handleCategorySelect('상의')}>상의</div>
                <div onClick={() => handleCategorySelect('하의')}>하의</div>
                <div onClick={() => handleCategorySelect('아우터')}>아우터</div>
            </DropdownOptions>
        </ClothingDropdownWrapper>
    );
};

export default ClothingDropdownSearch;
