import React, { useState, useEffect } from 'react';
import './UsersList.scss';
import { HOST } from '../../../config';

const UsersList = () => {
  const [filterValues, setFilterValues] = useState({
    userName: '',
    email: '',
    rol: '',
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${HOST}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message === 'User list') {
          setUsers(response.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let { userName, email, rol } = filterValues;
    userName = userName === '' ? '' : `name=${userName}&`;
    email = email === '' ? '' : `email=${email}&`;
    rol = rol === '' ? '' : `rol=${rol}&`;
    const data = `?${userName}${email}${rol}`;
    fetch(`${HOST}/users${data}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message === 'User list') {
          setUsers(response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFilterValues({
      ...filterValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className='usersList'>
      <div className='usersList__container'>
        <aside className='usersList__sidebar'>
          <h3 className='usersList__sidebar--header'>Filtrar usuarios</h3>
          <form name='users-filter' className='usersList__sidebar--form' onSubmit={handleSubmit}>
            <label htmlFor='userName'>Nombre</label>
            <input type='text' name='userName' id='userName' onChange={handleChange} />
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' onChange={handleChange} />
            <select name='rol' id='rol' onChange={handleChange}>
              <option value=''>rol</option>
              <option value='root'>root</option>
              <option value='admin'>admin</option>
              <option value='collaborator'>collaborator</option>
              <option value='client'>client</option>
            </select>
            <input type='submit' value='filtrar' />
          </form>
        </aside>
        <div className='usersList__list'>
          { users.length > 0 ? users.map((user) => (
            <div className='usersList__user' key={user._id}>
              <span className='usersList__user--name'>{user.name}</span>
              <span className='usersList__user--email'>{user.email}</span>
              <span className='usersList__user--rol'>{user.rol}</span>
            </div>
          )) : <span className='usersList__no-user'>No hay resultados</span> }
        </div>
      </div>
    </section>
  );
};

export default UsersList;
