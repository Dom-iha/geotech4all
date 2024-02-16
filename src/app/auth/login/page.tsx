'use client';
import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';

function SignUp() {
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
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    lastname: '',
    firstname: '',
  });

  //   const router = useRouter();

  const signup = async () => {
    try {
      const response = await fetch('', {
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
        //   router.push('/dasboard');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //   const handleChange = (event: React.FormEvent) => {
  //     const { name, value } = event.target;

  //     if (name === 'firstname') {
  //       setUserInput((prevState) => ({
  //         ...prevState,
  //         firstname: value,
  //       }));
  //     } else if (name === 'lastname') {
  //       setUserInput((prevState) => ({
  //         ...prevState,
  //         lastname: value,
  //       }));
  //     } else if (name === 'email') {
  //       setUserInput((prevState) => ({
  //         ...prevState,
  //         email: value,
  //       }));
  //     } else {
  //       setUserInput((prevState) => ({
  //         ...prevState,
  //         password: value,
  //       }));
  //     }
  //   };
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
  const [confirmValue, setConfirmValue] = useState('');

  //   const checkMatch = (event: React.FormEvent) => {
  //     const value = event.target.value;
  //     setConfirmValue(value);
  //     if (value === userInput.password) {
  //       setPasswordMatch(true);
  //     } else {
  //       setPasswordMatch(false);
  //     }
  //   };

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
    if (formIsValid) {
      setLoading(true);
      try {
        await signup();
        setLoading(false); // Set loading to false after signup attempt
      } catch (error) {
        setLoading(false); // Set loading to false if there was an error
        console.error('Error during signup:', error);
      }
    }
  };

  return (
    <>
      <div className='max-w-[425px] mx-auto p-4 lg:p-7 flex flex-col gap-6'>
        <div className='my-7'>
          <h1 className='font-bold text-4xl'>Login</h1>
          <small>login to your account</small>
        </div>

        <form className='flex flex-col gap-8' onSubmit={handleSignup}>
          <div className='relative'>
            <input
              type='email'
              id='email'
              name='email'
              autoComplete='off'
              placeholder='Enter your email address'
              className='peer placeholder:text-transparent border-accent border-2 py-3 pl-3 pr-10 w-full'
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
              className='peer placeholder:text-transparent border-accent border-2 py-3 pl-3 pr-10 w-full'
            />
            <label
              htmlFor='password'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Password
            </label>
          </div>
          <button
            type='button'
            disabled={loading}
            className='bg-accent text-main p-4 rounded-md'
          >
            {loading ? 'Creating account' : 'Login'}
          </button>
        </form>
        <div className='my-4'>
          <p className='text-center'>Or continue with</p>
        </div>
        <div>
          <button
            type='button'
            className='option p-3 border-2 border-accent rounded-md w-full'
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

export default SignUp;
