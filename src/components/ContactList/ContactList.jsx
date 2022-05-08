import { useSelector } from 'react-redux';
import { useGetContactsQuery, useDeleteContactsMutation } from 'redux/contacts/contacts-RTK-operations';
import { getFilterValue } from 'redux/contacts/contacts-selectors';
import { Oval } from 'react-loader-spinner';
import s from './ContactList.module.css';

export default function ContactList() {
    // const dispatch = useDispatch();
    // useEffect(() => {dispatch(fetchContact())}, [dispatch]);
    // const deleteBtn = (id) => { dispatch(deleteItem(id)) };

    const [deleteContacts] = useDeleteContactsMutation();

    const { data, isLoading} = useGetContactsQuery();
    const filteredValue = useSelector(getFilterValue);

    const getFilteredItems = () => {
        if (!!data) {
            if (filteredValue.trim() !== '') {
            const notReversed = data.filter(contact => contact.name.toLowerCase().includes(filteredValue.toLowerCase()));
                return notReversed.reverse();
            }
            return [...data].reverse();
        }
    };
    
    return <>
        {isLoading && <div className={s.spiner}><Oval
            height="20"
            width="20"
            color='rgb(14, 7, 105)'
            ariaLabel='loading'
            /></div>}
        {data && <ul className={s.list}>
            {getFilteredItems().map(contact => {
                return <>
                    <li key={contact.id} className={s.item}><p className={s.itemNumber}>{contact.name}: {contact.number}</p>
                    <button className={s.button} onClick={()=>deleteContacts(contact.id)} >Delete</button>
                    </li>
                </>
            })}
        </ul>}
    </>
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
//     toDelete: PropTypes.func,
// }