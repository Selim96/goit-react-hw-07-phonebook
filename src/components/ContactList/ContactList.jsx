import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredItems } from 'redux/contacts/contacts-selectors';
import { fetchContact, deleteItem } from 'redux/contacts/contacts-operations';
import s from './ContactList.module.css';

export default function ContactList() {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchContact())}, [dispatch]);
    const deleteBtn = (id) => { dispatch(deleteItem(id)) };
    const filteredItems = useSelector(getFilteredItems);

    return (
        <ul className={s.list}>
            {filteredItems.map(contact => {
                return <>
                    <li key={contact.id} className={s.item}><p className={s.itemNumber}>{contact.name}: {contact.number}</p>
                    <button className={s.button} onClick={()=> deleteBtn(contact.id)} >Delete</button>
                    </li>
                </>
            })}
        </ul>
    );
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
//     toDelete: PropTypes.func,
// }