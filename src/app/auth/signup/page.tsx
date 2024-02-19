'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState, useEffect } from 'react';

function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    lastname: '',
    firstname: '',
  });

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
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
        router.push('/auth/login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'firstname') {
      setUserInput((prevState) => ({
        ...prevState,
        firstname: value,
      }));
    } else if (name === 'lastname') {
      setUserInput((prevState) => ({
        ...prevState,
        lastname: value,
      }));
    } else if (name === 'email') {
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
    if (
      firstNameIsValid &&
      lastNameIsValid &&
      passwordIsValid &&
      emailIsValid &&
      passwordMatch
    ) {
      setFormIsValid(true);
    }

    return () => {};
  }, [
    firstNameIsValid,
    lastNameIsValid,
    emailIsValid,
    passwordIsValid,
    passwordMatch,
  ]);

  const checkPasswordMatch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setConfirmPasswordValue(value);
    if (value === userInput.password) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  const firstNameBlurHandler = () => {
    setFirstNameTouched(true);
  };
  const lastNameBlurHandler = () => {
    setLastNameTouched(true);
  };
  const emailBlurHandler = () => {
    setEmailTouched(true);
  };
  const passwordBlurHandler = () => {
    setPasswordTouched(true);
  };

  useEffect(() => {
    if (firstNameTouched && userInput.firstname.trim() === '') {
      setFirstNameIsValid(false);
    } else {
      setFirstNameIsValid(true);
      setFirstNameTouched(false);
    }

    if (lastNameTouched && userInput.lastname.trim() === '') {
      setLastNameIsValid(false);
    } else {
      setLastNameIsValid(true);
      setLastNameTouched(false);
    }

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
  }, [
    firstNameTouched,
    userInput.firstname,
    userInput.lastname,
    lastNameTouched,
    emailTouched,
    userInput.email,
    passwordTouched,
    userInput.password,
  ]);

  // fix loigc
  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      console.log('not vallid')
      return;
    }
    setLoading(true);
    try {
      await signup();
      setLoading(false); // Set loading to false after signup attempt
    } catch (error) {
      setLoading(false); // Set loading to false if there was an error
      console.error('Error during signup:', error);
    }
  };

  return (
    <>
      <div className='max-w-[425px] mx-auto p-6 lg:p-7 flex flex-col gap-6'>
        <div className='my-7'>
          <h1 className='font-bold text-4xl'>Sign up</h1>
          <small>create a new account</small>
        </div>

        <form className='flex flex-col gap-8' onSubmit={handleSignup}>
          <div className='relative'>
            <input
              type='text'
              id='firstname'
              name='firstname'
              autoComplete='off'
              placeholder='Enter your first name'
              value={userInput.firstname}
              onChange={handleChange}
              className='peer placeholder:text-transparent border-accent border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full'
            />
            <label
              htmlFor='firstname'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Firstname
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              id='lastname'
              name='lastname'
              autoComplete='off'
              placeholder='Enter your last name'
              value={userInput.lastname}
              onChange={handleChange}
              className='peer placeholder:text-transparent border-accent border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full'
            />
            <label
              htmlFor='lastname'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Lastname
            </label>
          </div>
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
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
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
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Password
            </label>
          </div>
          <div className='relative'>
            <input
              type='password'
              id='confirm'
              name='confirm'
              autoComplete='off'
              placeholder='Confirm your password'
              onChange={(e) => setConfirmPasswordValue(e.target.value)}
              className='peer placeholder:text-transparent border-accent border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full'
            />
            <label
              htmlFor='confirm'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Confirm Password
            </label>
          </div>
          <button
            type='submit'
            disabled={loading}
            className='bg-accent text-main p-4 rounded-md'
          >
            {loading ? 'Creating account' : 'Sign up'}
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
          <p>Have an account?</p>
          <Link href='/auth/login' className='underline font-bold'>
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
