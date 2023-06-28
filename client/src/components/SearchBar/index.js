import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { searchSatellites } from '../../actions';

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  font-size: 15px;
`;

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(searchSatellites(e.target.value));
  }

  return (
    <SearchInput
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
    />
  );
}

export default SearchBar;