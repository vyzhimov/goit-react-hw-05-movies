import PropTypes from 'prop-types';
import { ErrorWrapper, ErrorImg } from './Error.styled';
import Warning from './Warning.png';

const Error = ({ message }) => {
  return (
    <ErrorWrapper>
      <ErrorImg src={Warning} alt="warning" />
      <div>
        <p>Sorry there was an error. Please, reload the page! </p>
        <p>Code: {message}</p>
      </div>
    </ErrorWrapper>
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};
