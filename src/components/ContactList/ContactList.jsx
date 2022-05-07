import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredItems, getLoader } from 'redux/contacts/contacts-selectors';
import { fetchContact } from 'redux/contacts/contacts-operations';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

export default function ContactList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContact());
    }, [dispatch])
    const filteredItems = useSelector(getFilteredItems);
    const onLoading = useSelector(getLoader);


    return (<>
        {onLoading && <h3>Loading...</h3>}
        <ul className={s.list}>
            <ContactItem contacts={filteredItems}/>
        </ul>
        </>
    );
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
//     toDelete: PropTypes.func,
// }