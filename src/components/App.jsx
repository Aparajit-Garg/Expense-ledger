import { useState } from 'react';
import style from '../styles/App.module.css'
import Login from './Login';
import Register from './Register';

const App = () => {
  const [toRegister, setToRegister] = useState(false);
  return (
    <div className={style.main}>
      <div className={style.formWrapper}>
        <div>
          <div> Hi there </div>
          <div> Welcome to expense ledger </div>
        </div>
        <Login />
        {toRegister && <Register />}
        <div className={style.newSection}>
          <span> New to the ledger? </span>
          <button className={style.registerBtn}> Register </button>
        </div>
      </div>
    </div>
  )
}

export default App
