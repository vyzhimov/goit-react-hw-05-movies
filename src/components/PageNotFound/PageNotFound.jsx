import { NoPageLink } from './PageNotFound.styled';
import NotFoundImg from './notfound.png';

const PageNotFound = () => {
  return (
    <NoPageLink to={'/'}>
      <img src={NotFoundImg} alt="page not found"></img>
      <h1>Sorry, page not found</h1>
      <p>Click here to back to the home page</p>
    </NoPageLink>
  );
};

export default PageNotFound;
