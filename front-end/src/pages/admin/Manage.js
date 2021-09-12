import React, { useState, useEffect, useContext } from 'react';
import * as api from '../../services/api';
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import Input from '../../components/Input/Input';
import Select from '../../components/Input/Select';
import Label from '../../components/Input/Label';
import UserContext from '../../context/UserContext';
import UserResume from '../../components/UserResume';
import UserListHeader from '../../components/List/UserListHeader';

import { Container, Section, Title,
  ProductListContainer, ProductResumeContainer,
} from '../../styles/pages/customer/Checkout';

import { FormContainer, ListContainer, Button } from '../../styles/pages/admin/Manage';

const roles = [
  { id: 'seller', name: 'Vendedor' },
  { id: 'customer', name: 'Cliente' },
  { id: 'administrator', name: 'Administrador' },
];

const Manage = () => {
  const [selectedRole, setSelectedRole] = useState('seller');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [userList, setUserList] = useState([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    api.getUsers(token).then((result) => setUserList(result));
  }, [token]);

  const removeUserItem = (id) => {
    api.deleteUser({ id, token });
    const keep = userList.filter((element) => element.id !== id);
    setUserList(keep);
  };

  const isDisabled = () => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const SEIS = 6;
    const DOZE = 12;
    return !validEmail.test(userEmail)
    || userPassword.length < SEIS
    || userName.length < DOZE
    || selectedRole === '';
  };

  async function handleAddUser() {
    try {
      const newUser = await api.newUser({
        name: userName,
        email: userEmail,
        password: userPassword,
        role: selectedRole,
        token,
      });
      setUserList([...userList, newUser]);
    } catch (error) {
      console.log(error);
      setShowWarning(true);
    }
  }

  const renderForm = () => (
    <Section>
      <Title>Cadastrar novo usuario</Title>
      <ListContainer>
        <FormContainer>
          <Label text="Nome">
            <Input
              data-testid="admin_manage__input-name"
              value={ userName }
              onChange={ ({ target }) => setUserName(target.value) }
            />
          </Label>
          <Label text="Email">
            <Input
              data-testid="admin_manage__input-email"
              value={ userEmail }
              onChange={ ({ target }) => setUserEmail(target.value) }
            />
          </Label>
          <Label text="Senha">
            <Input
              type="password"
              data-testid="admin_manage__input-password"
              value={ userPassword }
              onChange={ ({ target }) => setUserPassword(target.value) }
            />
          </Label>
          <Label text="Tipo">
            <Select
              options={ roles }
              data-testid="admin_manage__select-role"
              value={ selectedRole }
              onChange={ ({ target }) => setSelectedRole(target.value) }
            />
          </Label>
          <Button
            data-testid="admin_manage__button-register"
            disabled={ isDisabled() }
            onClick={ handleAddUser }
          >
            CADASTRAR
          </Button>
        </FormContainer>
        { showWarning
          && <p data-testid="admin_manage__element-invalid-register">Deu ruim!</p> }
      </ListContainer>
    </Section>
  );

  const renderList = () => (
    <Section>
      <Title>Lista de usuarios</Title>
      <ProductListContainer>
        <UserListHeader />
        <ProductResumeContainer>
          { userList.map((user, index) => (
            <UserResume
              key={ user.id }
              user={ user }
              index={ index }
              exclude={ removeUserItem }
              testId="admin_manage"
              removable
            />
          )) }
        </ProductResumeContainer>
      </ProductListContainer>
    </Section>
  );

  return (
    <>
      <AdminNavbar />
      <Container>
        { renderForm() }
        { renderList() }
      </Container>
    </>
  );
};

export default Manage;
