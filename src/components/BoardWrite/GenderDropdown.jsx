import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const GenderDropdownWrapper = styled.div`
  position: relative;
  top: 110px;
  height: 35px;
  left: calc(50% - 344px);
  background-color: #e0e0e0;
  border: none;
  box-sizing: border-box;
  width: 234px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  /* padding: var(--padding-xs) var(--padding-3xs); */
  padding: none;
  z-index: 2;
  font-size: 20px;
  justify-content: center;
`;

const DropdownToggle = styled.div`
  position: absolute;
  padding: none;
  top: 0%;
  left: 0px;
  width: 234px;
  height: 110%;
  text-align: center;
  background-color: none;
  justify-content: center;
  display: flex;
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

const GenderDropdown = ({ board, setBoard }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleGenderSelect = selectedGender => {
        setBoard({ ...board, gender: selectedGender });
        // console.log(board);
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
        <GenderDropdownWrapper ref={dropdownRef}>
            <DropdownToggle onClick={handleDropdownToggle}>
                {board.gender ? board.gender : '성별'} {/* gender 속성만 출력 */}
            </DropdownToggle>
            <DropdownOptions isOpen={isDropdownOpen}>
                <div onClick={() => handleGenderSelect('남성')}>남성</div>
                <div onClick={() => handleGenderSelect('여성')}>여성</div>
            </DropdownOptions>
        </GenderDropdownWrapper>
    );
};

export default GenderDropdown;
