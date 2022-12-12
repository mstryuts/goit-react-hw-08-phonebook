import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contact/filterSlice';
import { Input, FormLabel, Box } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = e => dispatch(filterContact(e.target.value));
  return (
    <Box as="form" colSpan={2} pl={'16px'}>
      <FormLabel>
        <Input
          type="name"
          required
          onChange={filter}
          placeholder="Find contact by name"
        />
      </FormLabel>
    </Box>
  );
};

export default Filter;
