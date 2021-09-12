import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Id,
  Name,
  Email,
  Role,
  RemoveButton,
} from '../styles/components/UserResume';

const DICT_STATUS = {
  customer: 'Cliente',
  seller: 'P. Vendedora',
  administrator: 'P. Administradora',
};

const UserResume = ({ index, user, exclude }) => {
  const { id, name, email, role } = user;

  return (
    <Wrapper>
      <Id data-testid={ `admin_manage__element-user-table-item-number-${index}` }>
        { index + 1 }
      </Id>

      <Name data-testid={ `admin_manage__element-user-table-name-${index}` }>
        { name }
      </Name>

      <Email data-testid={ `admin_manage__element-user-table-email-${index}` }>
        { email }
      </Email>

      <Role>
        <span data-testid={ `admin_manage__element-user-table-role-${index}` }>
          { DICT_STATUS[role] }
        </span>
      </Role>

      <RemoveButton
        data-testid={ `admin_manage__element-user-table-remove-${index}` }
        onClick={ () => exclude(id) }
      >
        Excluir
      </RemoveButton>
    </Wrapper>
  );
};

UserResume.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  exclude: PropTypes.func.isRequired,
};

export default UserResume;
