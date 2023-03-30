import { Circles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';
export const Loader = () => {
  return (
    <LoaderContainer>
      <Circles
        height="80"
        width="80"
        color="black"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
};
