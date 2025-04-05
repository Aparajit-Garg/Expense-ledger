import React, { useState } from 'react'
import style from '../styles/Login.module.css'
import PropTypes from 'prop-types';

const Login = ({ toRegister }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const loginHandle = () => {

  }

  const registerHandle = () => {

  }

  return (
    <form className={style.form}>
      <div className={style.entry}>
        <label htmlFor='username'> Email/Username </label>
        <input type='text' id='username' value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className={style.entry}>
        <label htmlFor='password'> Password </label>
        <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} value={password} />
      </div>
      {!toRegister && <button onClick={loginHandle} className={style.loginBtn}> Login </button>}

      {toRegister && (
        <>
          <div className={style.entry}>
            <label htmlFor='firstName'> First Name </label>
            <input id='firstName' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className={style.entry}>
            <label htmlFor='lastName'> Last Name </label>
            <input id='lastName' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className={style.entry}>
            <label htmlFor='phoneNumber'> Phone Number </label>
            <input id='phoneNumber' type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
        </>
      )}
      {toRegister && <button className={style.loginBtn} onClick={registerHandle}> Register </button>}
    </form>
  )
}

Login.propTypes = {
  toRegister: PropTypes.bool.isRequired
}

export default Login