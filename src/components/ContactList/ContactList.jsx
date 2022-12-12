import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contact/operations';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contact/selectors';
import { List, ListItem, Flex, IconButton, Text } from '@chakra-ui/react';

import { AiTwotoneDelete, AiFillPhone } from 'react-icons/ai';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleContacts = (contacts, filter) => {
    if (!filter) return contacts;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  const delContact = id => {
    dispatch(deleteContact(id));
  };
  if (visibleContacts.length === 0) return null;
  return (
    <>
      <Flex as={List} flexDirection="column">
        {visibleContacts.map(({ id, name, number }) => (
          <Flex
            as={ListItem}
            justify="center"
            alignItems="center"
            key={id}
            gap={'5'}
          >
            <Text as="b" fontSize="2xl">
              {name}
            </Text>
            <AiFillPhone />
            <Text as="samp" fontSize="xl">
              {number}
            </Text>
            <IconButton
              color="green.200"
              variant="outline"
              icon={<AiTwotoneDelete />}
              onClick={() => {
                delContact(id);
              }}
            ></IconButton>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default ContactList;
