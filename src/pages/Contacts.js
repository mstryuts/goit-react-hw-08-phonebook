import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contact/operations';
import { Box, Heading, Flex } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Box>
        <Box colSpan={2}>
          <Section header="Phonebook" title="">
            <ContactForm />
          </Section>
        </Box>
        {contacts.length > 0 ? (
          <Box>
            <Section header="" title="Contacts">
              <Filter />
              <ContactList />
            </Section>
          </Box>
        ) : (
          <Box>
            <Section header="" title="Your phonebook is empty.">
              <Flex justifyContent="center">
                <Heading as="h3">Please add contacts.</Heading>
              </Flex>
            </Section>
          </Box>
        )}
      </Box>
    </>
  );
}
