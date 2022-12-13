import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contact/operations';
import { getContacts } from 'redux/contact/selectors';
import { useSelector } from 'react-redux';
import { Input, Box, FormLabel, Button } from '@chakra-ui/react';

const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.length > 0) {
      const contactsInPhonebook = [];
      contacts.forEach(({ name }) =>
        contactsInPhonebook.push(name.toLowerCase())
      );
      if (contactsInPhonebook.includes(name.toLowerCase())) {
        alert(`${name} is already in contacts.`);
        reset();
        return;
      }
    }

    dispatch(addContacts({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box as="form" pl={4} onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </FormLabel>
      <Button
        backgroundColor={'green.100'}
        _hover={{ bg: 'green.200' }}
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.50"
        type="submit"
      >
        Add contact
      </Button>
    </Box>
  );
};
export default ContactForm;
