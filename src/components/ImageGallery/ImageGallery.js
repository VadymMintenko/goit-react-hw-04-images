import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33034390-7e7038dc39440b662093bd231';

export const ImageGallery = ({ value, openModal }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (value === '') {
      return;
    }
    if (value !== searchText && images.length > 0 && page > 1) {
      setPage(() => 1);
      setImages(() => [...[]]);
      return;
    }
    if (value !== searchText && images.length > 0 && page === 1) {
      setPage(() => 1);
      setImages(() => [...[]]);
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}?key=${KEY}&q=${value}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
        );
        const data = await response.json();
        if (data.totalHits === 0) {
          return alert('За вашм запитом нічого не знайдено');
        }

        setSearchText(() => value);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalHits(data.totalHits);
      } catch (error) {
        alert('Sorry');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [value, page]);

  const onPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      {loading && <Loader />}
      <ImageGalleryStyled className="gallery">
        {images && <ImageGalleryItem openModal={openModal} images={images} />}
      </ImageGalleryStyled>
      {totalHits > images.length && <Button page={onPage} />}
    </>
  );
};

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
