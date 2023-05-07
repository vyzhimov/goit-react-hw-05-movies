import { Form, Input, Label, Button } from './SearchForm.styled';
import { BiSearchAlt } from 'react-icons/bi';

const SearchForm = ({ handleSubmit, movieName, handleInputChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        SEARCH MOVIE BY TITLE
        <Input
          type="text"
          name="movie"
          value={movieName}
          onChange={handleInputChange}
        ></Input>
      </Label>
      <Button type="submit">
        <BiSearchAlt />
      </Button>
    </Form>
  );
};

export default SearchForm;
