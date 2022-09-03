import React from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';


const Filter = ({ value, onChange, contacts, onDeleteClick }) => {
  const onOwnDeleteClick = (contactId) => {
        onDeleteClick(contactId)
      }
  return (
          <>
            <PStyled>Find contacts by name</PStyled>
            <InputStyled
              type="text"
              name="filter"
              value={value}
              onChange={onChange}
            />
    
            {contacts.map(contact => {
              if (!value) {
                return null;
              }
              const lowerContact = contact.name.toLowerCase();
              if (lowerContact.includes(value.toLowerCase())) {
                return (
                  <LiStyled key={contact.id}>
                    {contact.name}: {contact.number}
                    <ButtonStyled
                      onClick={() => onOwnDeleteClick(contact.id)}
                      type="click"
                      name={contact.name}
                    >
                      Delete
                    </ButtonStyled>
                  </LiStyled>
                );
              } else {
                return null;
              }
            })}
          </>
        );
}
// class Filter extends Component {
//   onDeleteClick = (contactId) => {
//     this.props.onDeleteClick(contactId)
//   }
//   render() {
//     const { value, onChange, contacts } = this.props;
//     return (
//       <>
//         <PStyled>Find contacts by name</PStyled>
//         <InputStyled
//           style={{ marginLeft: '10px' }}
//           type="text"
//           name="filter"
//           value={value}
//           onChange={onChange}
//         />

//         {contacts.map(contact => {
//           if (!value) {
//             return null;
//           }
//           const lowerContact = contact.name.toLowerCase();
//           if (lowerContact.includes(value.toLowerCase())) {
//             return (
//               <LiStyled key={contact.id}>
//                 {contact.name}: {contact.number}
//                 <ButtonStyled
//                   onClick={() => this.onDeleteClick(contact.id)}
//                   type="click"
//                   name={contact.name}
//                 >
//                   Delete
//                 </ButtonStyled>
//               </LiStyled>
//             );
//           } else {
//             return null;
//           }
//         })}
//       </>
//     );
//   }
// }

const PStyled = styled.p`
  display: inline;
  margin-left: 10px;
`;
const ButtonStyled = styled.button`
  width: 100px;
  border: 1px solid gray;
  border-radius: 15%;
  height: 35px;
  margin-left: 10px;
  color: black;
  font-weight: 800;
  background-color: #fff;
`;
const InputStyled = styled.input`
  width: 200px;
  height: 25px;
  margin-left: 10px;
  display: block;
  margin-top: 10px;
`;
const LiStyled = styled.li`
  margin-left: 10px;
`;
Filter.propTypes = {
  contacts: proptypes.array,
  value: proptypes.string,
  onChange: proptypes.func,
};

export default Filter;
