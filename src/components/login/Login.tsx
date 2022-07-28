import React, {useEffect, useState} from 'react';
import Input from '../formfields/Input';

interface Events {
  fn: React.ChangeEvent<HTMLInputElement>,
  formEve: React.FormEvent<HTMLFormElement>,
}

const Login = (props: { setLoggedIn: (arg0: boolean) => void; }) => {
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  const valueChangeHandle = (e:Events["fn"]) => {
    setValue(e.target.value);
  };
  const passwordChangeHandle = (e:Events["fn"]) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: Events["formEve"] ) => {
    e.preventDefault();
    if (value !== '' && password !== '') {
      props.setLoggedIn(true)
    }
  }
  useEffect(() => {

  }, [])
  return (
    <div className='cmp-login container'>
      <form className='cpm-login__form' onSubmit={handleSubmit}>
        <h1>Welcome to Login</h1>
        <Input type="text" name="email" placeholder='Enter email' value={value}
        changeHandler={(e) => valueChangeHandle(e)} />
        <Input type="password" name="password" placeholder='Enter Password' value={password}
          changeHandler={(e) => passwordChangeHandle(e)} />
        <div className='button'>
          <button type='submit'>Login</button>
        </div>
        </form>
    </div>
  )
}

export default Login;
