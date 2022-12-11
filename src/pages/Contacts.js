import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contact/operations';

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
      <Section title={'Contacts'}>
        <ContactForm />
      </Section>
      <Filter />

      <ContactList />
    </>
  );
}

// // export default function Contacts() {
// //   const dispatch = useDispatch();
// //   const contacts = useSelector(state => state.contacts.contacts.items);

// //   useEffect(() => {
// //     dispatch(fetchContacts());
// //   }, [dispatch]);
// //   return (
// //     <>
// //       <Helmet>
// //         <title>Your contacts</title>
// //       </Helmet>
// //       <Grid mt={4} templateColumns="repeat(5, 1fr)" gap={1}>
// //         <GridItem colSpan={2}>
// //           <Section header="Phonebook" title="">
// //             <ContactForm />
// //           </Section>
// //         </GridItem>
// //         {contacts.length > 0 ? (
// //           <GridItem colSpan={3}>
// //             <Section header="" title="Contacts">
// //               <Filter />
// //               <ContactList />
// //             </Section>
// //           </GridItem>
// //         ) : (
// //           <GridItem colSpan={3}>
// //             <Section header="" title="Your phonebook is empty.">
// //               <Flex justifyContent="center">
// //                 <Heading as="h3">Please add contacts.</Heading>
// //               </Flex>
// //             </Section>
// //           </GridItem>
// //         )}
// //       </Grid>
// //     </>
// //   );
// // }
// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { Helmet } from 'react-helmet';
// // import { fetchContacts } from 'redux/contact/operations';
// // import ContactForm from 'components/ContactForm';
// // import ContactList from 'components/ContactList';
// // import Section from 'components/Section';
// // import Filter from 'components/Filter';
// // import { Grid, GridItem, Heading, Flex } from '@chakra-ui/react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { fetchContacts } from 'redux/contact/operations';
// import ContactForm from 'components/ContactForm';
// import ContactList from 'components/ContactList';
// import Section from 'components/Section';
// import Filter from 'components/Filter';
