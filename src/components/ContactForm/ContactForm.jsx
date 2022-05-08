import { useState } from 'react';
import { useCreateContactsMutation, useGetContactsQuery } from 'redux/contacts/contacts-RTK-operations';
import { Oval } from 'react-loader-spinner';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const formOutput = {
    name,
    number,
  };
  // const dispatch = useDispatch();
  // const contactsStore = useSelector(getContacts);

  const handlChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      
      case 'number':
        setNumber(e.currentTarget.value);
        break;
    
      default:
        break;
    }
  };

  const { data } = useGetContactsQuery();
  const checkFunction = () => (data.some(v => v.name.toLowerCase() === name.toLowerCase())); 
    
  const [createContacts, { isLoading }] = useCreateContactsMutation();

  const handlSubmit = e => {
    e.preventDefault();
      if (checkFunction()) {
        alert(`${name} is already in contacts!`);
        return;
    };
    createContacts(formOutput);
      // dispatch(addContact(formOutput));
      setName('');
      setNumber('');    
    }

  return (
    <form className={s.form} onSubmit={handlSubmit}>
    <label className={s.formLabel}>
      Name
      <input
        type='text'
        name="name"
        className={s.formInput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder='Enter name'
        value={name}
        onChange={handlChange} />
    </label>
    <label className={s.formLabel}>
      Number
      <input
        type="tel"
        name="number"
        className={s.formInput}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder='Enter number'
        value={number}
        onChange={handlChange}
      />
    </label>
      <button type='submit' className={s.button} disabled={isLoading}>
        {isLoading && <Oval
            height="10"
            width="10"
            color='rgb(14, 7, 105)'
            ariaLabel='loading'
            />} Add contact</button>
  </form>);
}
export default ContactForm;

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func,
//     check: PropTypes.func,
//   }

// ================================================
// class OldContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     }

//   static propTypes = {
//     onSubmit: PropTypes.func,
//     check: PropTypes.func,
//   }

//     handlChange = e => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//     }
    
//     handlSubmit = e => {
//     e.preventDefault();
//       const outputCheck = this.props.check(this.state.name);
//       if (outputCheck) {
//         alert(`${this.state.name} is already in contacts!`);
//         return;
//     };
//     this.props.onSubmit(this.state);
//     this.setState({ name: '', number: '', });
      
//     }

//     render() {
//         const { name, number,} = this.state;
//         return (
//         <form className={s.form} onSubmit={this.handlSubmit}>
//           <label className={s.formLabel}>
//             Name
//             <input
//               type='text'
//               name="name"
//               className={s.formInput}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 placeholder='Enter name'
//               value={name}
//               onChange={this.handlChange} />
//           </label>
//           <label className={s.formLabel}>
//             Number
//           <input
//             type="tel"
//             name="number"
//             className={s.formInput}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 placeholder='Enter number'
//             value={number}
//             onChange={this.handlChange}
//             />
//           </label>
//           <button type='submit' className={s.button}>Add contact</button>
//         </form>
//         );
//     }
// }