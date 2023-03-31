import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33034390-7e7038dc39440b662093bd231';

export const ImageGallery = ({ value, openModal, loadMore, defaultPage }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (value === '') {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}?key=${KEY}&q=${value}&page=${defaultPage}&image_type=photo&orientation=horizontal&per_page=12`
        );
        const data = await response.json();
        if (data.totalHits === 0) {
          return alert('За вашм запитом нічого не знайдено');
        }
        if (defaultPage === 1) {
          setImages([...data.hits]);
        } else {
          setImages(prevImages => [...prevImages, ...data.hits]);
        }

        setTotalHits(data.totalHits);
      } catch (error) {
        alert('Sorry');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [value, defaultPage]);

  return (
    <>
      {loading && <Loader />}
      <ImageGalleryStyled className="gallery">
        {images && <ImageGalleryItem openModal={openModal} images={images} />}
      </ImageGalleryStyled>
      {totalHits > images.length && <Button page={loadMore} />}
    </>
  );
};

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
