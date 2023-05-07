import PropTypes from 'prop-types';
import { useState } from 'react';

import { Form, Input, Label, Button } from './SearchForm.styled';
import { BiSearchAlt } from 'react-icons/bi';

const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = evt => {
    setQuery(evt.currentTarget.value);
  };

  const handleSumbit = e => {
    e.preventDefault();

    handleSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSumbit}>
      <Label>
        SEARCH MOVIE BY TITLE
        <Input
          type="text"
          name="movie"
          value={query}
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

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  movieName: PropTypes.string,
  handleInputChange: PropTypes.func,
};
