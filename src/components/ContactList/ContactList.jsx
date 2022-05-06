import { useSelector } from 'react-redux';
import { getFilteredItems} from 'redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

export default function ContactList() {
    const filteredItems = useSelector(getFilteredItems);

    return (
        <ul className={s.list}>
            <ContactItem contacts={filteredItems}/>
        </ul>
    );
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
//     toDelete: PropTypes.func,
// }