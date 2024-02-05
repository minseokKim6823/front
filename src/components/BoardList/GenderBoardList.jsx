import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const GenderDropdownWrapper = styled.div`
  position: absolute;
  top: 90px;
  left: 7px;
  /* border-radius: var(--br-5xs); */
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-whitesmoke-200);
  box-sizing: border-box;
  width: 234px;
  height: 10px;
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
  top: 23px;
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

const GenderDropdownSearch = ({ search, setSearch }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleGenderSelect = selectedGender => {
        setSearch({ ...search, gender: selectedGender });
        // console.log(search);
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
                {search.gender ? search.gender : '성별'} {/* gender 속성만 출력 */}
            </DropdownToggle>
            <DropdownOptions isOpen={isDropdownOpen}>
                <div onClick={() => handleGenderSelect('남성')}>남성</div>
                <div onClick={() => handleGenderSelect('여성')}>여성</div>
            </DropdownOptions>
        </GenderDropdownWrapper>
    );
};

export default GenderDropdownSearch;
