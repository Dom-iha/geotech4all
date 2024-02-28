'use client';
import PasswordToggle from '@/components/ui/PasswordToggle';
import AuthContext from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState, useEffect } from 'react';

function Login() {
  const router = useRouter();
  const { authenticate } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const selectedType = showPassword ? 'text' : 'password';

  const Login = async () => {
    setLoading(true);
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
        authenticate(data);
        router.push('/admin');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
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

  useEffect(() => {
    if (
      emailTouched &&
      userInput.email.trim() === '' &&
      !userInput.email.includes('@') ||
      !userInput.email.includes('.com')
    ) {
      setEmailIsValid(false);
    } else if (emailTouched && userInput.email.includes('@')) {
      setEmailIsValid(true);
      setEmailTouched(false);
    }

    if (passwordTouched && userInput.password.trim() === '') {
      setPasswordIsValid(false);
    } else if (passwordTouched && userInput.password.trim() !== '') {
      setPasswordIsValid(true);
      setPasswordTouched(false);
    }
  }, [emailTouched, userInput.email, passwordTouched, userInput.password]);

  // fix loigc
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      console.log('invalid fields');
      return;
    }
    await Login();
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
            {!emailIsValid && emailTouched && 
              <p id='email-error' aria-live='polite' className='absolute -top-6 right-0 text-right text-error text-sm'>
                Please enter a valid email
              </p>
            }
            <input
              type='email'
              id='email'
              name='email'
              autoComplete='off'
              placeholder='Enter your email address'
              value={userInput.email}
              onChange={handleChange}
              onBlur={() => setEmailTouched(true)}
              aria-describedby='email-error'
              className={`${!emailIsValid && emailTouched ? 'border-error focus-visible:outline-error' : 'border-accent'} peer placeholder:text-transparent  border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full`}
            />
            <label
              htmlFor='email'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Email
            </label>
          </div>
          <div className='relative'>
            {!passwordIsValid && passwordTouched && 
              <p id='password-error' aria-live='polite' className='absolute -top-6 right-0 text-right text-error text-sm'>Please enter your password</p>
            }
            <input
              type={selectedType}
              id='password'
              name='password'
              autoComplete='off'
              placeholder='Enter your password'
              value={userInput.password}
              onChange={handleChange}
              onBlur={() => setPasswordTouched(true)}
              aria-describedby='password-error'
              className={`${!passwordIsValid && passwordTouched ? 'border-error focus-visible:outline-error' : 'border-accent'} peer placeholder:text-transparent  border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full`}
            />
            <label
              htmlFor='password'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Password
            </label>
            <PasswordToggle
              setShowPassword={setShowPassword}
              showPassword={showPassword}
            />
          </div>
          <button
            type='submit'
            disabled={loading}
            className='bg-accent mt-4 text-main p-4 rounded-md hover:shadow-xl focus-visible:outline-offset-4 focus-visible:outline-dashed focus-visible:outline-accent focus-visible:outline-2 transition duration-300'
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
            className='option p-3 border focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed border-accent rounded-md w-full hover:bg-accent/10 transition duration-300'
          >
            Google
          </button>
        </div>
        <div className='text-sm flex gap-1 justify-center'>
          <p>New user?</p>
          <Link
            href='/auth/signup'
            className='underline font-bold focus-visible:outline-dashed focus-visible:outline-2'
          >
            Create account
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
