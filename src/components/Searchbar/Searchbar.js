import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './Searchbar.styled';
export const Searchbar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const heandleChange = evt => {
    setValue(evt.target.value.trim());
  };
  const heandleSubmit = evt => {
    evt.preventDefault();
    if (!value) {
      return alert('Enter text');
    }
    onSearch(value);
    setValue('');
  };

  return (
    <SearchbarStyled className="searchbar">
      <SearchForm onSubmit={heandleSubmit} className="form">
        <SearchFormButton type="submit" className="button">
          <span className="button-label">Search</span>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={heandleChange}
        />
      </SearchForm>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
