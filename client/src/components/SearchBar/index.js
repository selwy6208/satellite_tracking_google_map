import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as resuableComponents from '../../reusable-components';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {searchSatellites} from '../../actions';

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  font-size: 15px;
`;


const SearchBar = () => {
  const {FlexContainer, ArrowButton, IconArea} = resuableComponents;

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(searchSatellites(e.target.value));
  }

  const handleSearchButtonClick = () => {
  }

  return (
    <FlexContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
    </FlexContainer>
  );
}

export default SearchBar;