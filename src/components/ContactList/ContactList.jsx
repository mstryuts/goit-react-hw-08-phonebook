import css from '../ContactList/ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contact/operations';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contact/selectors';

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
      <ul className={css.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            {name}: {number}
            <button className={css.btn} onClick={() => delContact(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
