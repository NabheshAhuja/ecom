import { useState } from 'react';
import Button from '../button/button.component.jsx';
import FormInput from '../form-input/form-input.component.jsx';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentfromAuth,
} from '../../utils/firebase/firebase.utils.js';

import './sign-up.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentfromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already exists!');
      }
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
    console.log(name + ':' + value);
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?create one here!</h2>
      <span>Signup with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type={'text'}
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <FormInput
          label='Email'
          type={'Email'}
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='password'
          type={'password'}
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type={'password'}
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
