import css from '../Filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contact/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = e => dispatch(filterContact(e.target.value));
  return (
    <label className={css.label}>
      Find contacts by name{' '}
      <input className={css.input} type="text" onChange={filter} />
    </label>
  );
};

export default Filter;
