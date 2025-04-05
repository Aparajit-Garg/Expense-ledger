import { useState } from 'react';
import style from '../styles/App.module.css'
import Login from './Login';
import Register from './Register';

const App = () => {
  const [toRegister, setToRegister] = useState(false);
  return (
    <div className={style.main}>
      <div className={style.formWrapper}>
        <div className={style.heading}>
          <div> Hi there </div>
          <div> Welcome to expense ledger </div>
        </div>
        <Login toRegister={toRegister} />
        <div className={style.newSection}>
          {toRegister ?
            <>
              <span> Already have an account? </span>
              <button className={style.registerBtn} onClick={() => setToRegister(false)}> Sign in </button>
            </>
            :
            <>
              <span> New to the ledger? </span>
              <button className={style.registerBtn} onClick={() => setToRegister(true)}> Register </button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default App
