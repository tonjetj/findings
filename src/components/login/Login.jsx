import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BASE_URL } from '../api/apiBase';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/auction/auth/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const responseData = await response.json();
      console.log('User logged in successfully:', responseData);
      // Continue with other actions
    } catch (error) {
      console.error('Failed to login:', error);
      // Handle error gracefully
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        {...register('email')}
      />
      {errors.email && <p>{errors.email.message}</p>}
      
      <input
        type="password"
        placeholder="Password"
        {...register('password')}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button>Login</button>
    </form>
  );
}

export default LoginForm;
