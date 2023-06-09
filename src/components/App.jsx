import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppStyled } from './App.styled';
import React, { useState } from 'react';
export const App = () => {
  const [textSearch, setTextSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  const [page, setPage] = useState(1);

  const handleTogle = image => {
    setShowModal(!showModal);
    setLargeImage(image);
  };

  const heandleSubmit = textSearch => {
    setTextSearch(textSearch);
    setPage(1);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <AppStyled>
      {showModal && (
        <Modal closeModal={handleTogle}>
          <img src={largeImage} alt="" />
        </Modal>
      )}

      <Searchbar onSearch={heandleSubmit} />
      <ImageGallery
        value={textSearch}
        openModal={handleTogle}
        loadMore={loadMore}
        defaultPage={page}
      />
    </AppStyled>
  );
};
