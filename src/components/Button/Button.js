import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';
export const Button = ({ page }) => {
  return (
    <ButtonStyled type="button" onClick={page}>
      Load More
    </ButtonStyled>
  );
};

Button.propTypes = {
  page: PropTypes.func.isRequired,
};
