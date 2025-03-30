import React, { useState } from 'react'
import style from '../styles/Login.module.css'

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {

  }

  return (
    <form onSubmit={login} className={style.form}>
      <div className={style.entry}>
        <label htmlFor='username'> Email/Username </label>
        <input type='text' id='username' value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className={style.entry}>
        <label htmlFor='password'> Password </label>
        <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} value={password} />
      </div>
      <button></button>
    </form>
  )
}

export default Login