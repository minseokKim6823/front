import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const GenderDropdownWrapper = styled.div`
  position: absolute;
  top: 108px;
  left: calc(50% - 344px);
  border-radius: var(--br-5xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-whitesmoke-200);
  box-sizing: border-box;
  width: 234px;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-3xs);
  gap: var(--gap-mini);
  z-index: 2;
`;

const DropdownToggle = styled.div`
  padding: 10px;
  width: 200px;
  background-color: #e0e0e0;
  cursor: pointer;
`;

const DropdownOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 10px;
  width: 200px;
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
