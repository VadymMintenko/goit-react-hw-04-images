import PropTypes from 'prop-types';

import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ openModal, images }) => {
  return images.map(obj => {
    return (
      <ImageGalleryItemStyled
        className="gallery-item"
        key={obj.id}
        onClick={() => {
          openModal(obj.largeImageURL);
        }}
      >
        <ImageGalleryItemImage src={obj.webformatURL} alt={obj.tags} />
      </ImageGalleryItemStyled>
    );
  });
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
