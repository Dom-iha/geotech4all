'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState, useEffect } from 'react';

function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });


  const Login = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setSuccess(true);
        router.push('/admin');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setUserInput((prevState) => ({
        ...prevState,
        email: value,
      }));
    } else {
      setUserInput((prevState) => ({
        ...prevState,
        password: value,
      }));
    }
  };

  useEffect(() => {
    if (passwordIsValid && emailIsValid) {
      setFormIsValid(true);
    }

    return () => {};
  }, [emailIsValid, passwordIsValid]);

  const emailBlurHandler = () => {
    setEmailTouched(true);
  };
  const passwordBlurHandler = () => {
    setPasswordTouched(true);
  };

  useEffect(() => {
    if (
      emailTouched &&
      userInput.email.trim() === '' &&
      !userInput.email.includes('@')
    ) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
      setEmailTouched(false);
    }

    if (passwordTouched && userInput.password.trim() === '') {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
      setPasswordTouched(false);
    }
  }, [emailTouched, userInput.email, passwordTouched, userInput.password]);

  // fix loigc
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    setLoading(true);
    try {
      await Login();
      setLoading(false); // Set loading to false after Login attempt
    } catch (error) {
      setLoading(false); // Set loading to false if there was an error
      console.error('Error during Login:', error);
    }
  };

  return (
    <>
      <div className='max-w-[425px] mx-auto p-6 lg:p-7 flex flex-col gap-6'>
        <div className='my-7'>
          <h1 className='font-bold text-4xl'>Login</h1>
          <small>login to your account</small>
        </div>

        <form className='flex flex-col gap-8' onSubmit={handleLogin}>
          <div className='relative'>
            <input
              type='email'
              id='email'
              name='email'
              autoComplete='off'
              placeholder='Enter your email address'
              value={userInput.email}
              onChange={handleChange}
              className='peer placeholder:text-transparent border-accent border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full'
            />
            <label
              htmlFor='email'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Email
            </label>
          </div>
          <div className='relative'>
            <input
              type='password'
              id='password'
              name='password'
              autoComplete='off'
              placeholder='Enter your password'
              value={userInput.password}
              onChange={handleChange}
              className='peer placeholder:text-transparent border-accent border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full'
            />
            <label
              htmlFor='password'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Password
            </label>
          </div>
          <button
            type='submit'
            disabled={loading}
            className='bg-accent text-main p-4 rounded-md'
          >
            {loading ? 'Logging in' : 'Login'}
          </button>
        </form>
        <div className='my-4'>
          <p className='text-center'>Or continue with</p>
        </div>
        <div>
          <button
            type='button'
            className='option p-3 border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed border-accent rounded-md w-full'
          >
            Google
          </button>
        </div>
        <div className='text-sm flex gap-1 justify-center'>
          <p>New user?</p>
          <Link href='/auth/signup' className='underline font-bold'>
            Create account
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
