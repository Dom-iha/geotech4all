'use client';
import PasswordToggle from '@/components/ui/password-toggle';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  const [lastNameIsValid, setLastNameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

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

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const selectedType = showPassword ? 'text' : 'password';

  const signup = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT as string;

    setLoading(true);
    try {
      const response = await fetch(url + endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        toast.success('Signup successful!', {
          style: { border: '1px solid hsl(147, 86%, 57%)' },
        });
        router.push('/auth/login');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Signup failed please try again!', {
        style: { border: '1px solid hsl(354, 84%, 57%)' },
      });
    } finally {
      setLoading(false);
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
    } else {
      setFormIsValid(false);
    }

    return () => {};
  }, [
    firstNameIsValid,
    lastNameIsValid,
    emailIsValid,
    passwordIsValid,
    passwordMatch,
  ]);

  // fix logic:
  // password match only works if the confirm field changes so
  // currently when it matches and user goes back to change the password the confirm
  // fields's error message is not fired as it is not aware user changed password
  const checkPasswordMatch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfirmPasswordValue(value);

    if (value !== userInput.password) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  useEffect(() => {
    if (firstNameTouched && userInput.firstname.trim() === '') {
      setFirstNameIsValid(false);
    } else if (firstNameTouched && userInput.firstname.trim() !== '') {
      setFirstNameIsValid(true);
      setFirstNameTouched(false);
    }

    if (lastNameTouched && userInput.lastname.trim() === '') {
      setLastNameIsValid(false);
    } else if (lastNameTouched && userInput.lastname.trim() !== '') {
      setLastNameIsValid(true);
      setLastNameTouched(false);
    }

    if (
      (emailTouched &&
        userInput.email.trim() === '' &&
        !userInput.email.includes('@')) ||
      !userInput.email.includes('.com')
    ) {
      setEmailIsValid(false);
    } else if (emailTouched && userInput.email.includes('@')) {
      setEmailIsValid(true);
      setEmailTouched(false);
    }

    if (passwordTouched && userInput.password.trim() === '') {
      setPasswordIsValid(false);
    } else if (passwordTouched && userInput.password.length >= 8) {
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

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();

    // console.log(formIsValid)

    if (!formIsValid) {
      console.log('invalid fields');
      return;
    }
    await signup();
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
            {!firstNameIsValid && firstNameTouched && (
              <p
                id='firstname-error'
                aria-live='polite'
                className='absolute -top-6 right-0 text-right text-error text-sm'
              >
                Please enter your firstname
              </p>
            )}
            <input
              type='text'
              id='firstname'
              name='firstname'
              autoComplete='off'
              placeholder='Enter your first name'
              value={userInput.firstname}
              onChange={handleChange}
              aria-describedby='firstname-error'
              onBlur={() => setFirstNameTouched(true)}
              className={`${
                !firstNameIsValid && firstNameTouched
                  ? 'border-error focus-visible:outline-error'
                  : 'border-accent'
              } peer placeholder:text-transparent  border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full`}
            />
            <label
              htmlFor='firstname'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Firstname
            </label>
          </div>
          <div className='relative'>
            {!lastNameIsValid && lastNameTouched && (
              <p
                id='lastname-error'
                aria-live='polite'
                className='absolute -top-6 right-0 text-right text-error text-sm'
              >
                Please enter your lastname
              </p>
            )}
            <input
              type='text'
              id='lastname'
              name='lastname'
              autoComplete='off'
              placeholder='Enter your last name'
              value={userInput.lastname}
              onChange={handleChange}
              aria-describedby='lastname-error'
              onBlur={() => setLastNameTouched(true)}
              className={`${
                !lastNameIsValid && lastNameTouched
                  ? 'border-error focus-visible:outline-error'
                  : 'border-accent'
              } peer placeholder:text-transparent  border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full`}
            />
            <label
              htmlFor='lastname'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Lastname
            </label>
          </div>
          <div className='relative'>
            {!emailIsValid && emailTouched && (
              <p
                id='email-error'
                aria-live='polite'
                className='absolute -top-6 right-0 text-right text-error text-sm'
              >
                Please enter a valid email
              </p>
            )}
            <input
              type='email'
              id='email'
              name='email'
              autoComplete='off'
              placeholder='Enter your email address'
              value={userInput.email}
              onChange={handleChange}
              aria-describedby='email-error'
              onBlur={() => setEmailTouched(true)}
              className={`${
                !emailIsValid && emailTouched
                  ? 'border-error focus-visible:outline-error'
                  : 'border-accent'
              } peer placeholder:text-transparent  border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full`}
            />
            <label
              htmlFor='email'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Email
            </label>
          </div>
          <div className='relative'>
            {!passwordIsValid && passwordTouched && (
              <p
                id='password-error'
                aria-live='polite'
                className='absolute -top-6 right-0 text-right text-error text-sm'
              >
                {userInput.password === ''
                  ? 'Please enter your password'
                  : 'Password too short'}
              </p>
            )}
            <input
              type={selectedType}
              id='password'
              name='password'
              autoComplete='off'
              placeholder='Enter your password'
              value={userInput.password}
              onChange={handleChange}
              aria-describedby='password-error'
              onBlur={() => setPasswordTouched(true)}
              className={`${
                !passwordIsValid && passwordTouched
                  ? 'border-error focus-visible:outline-error'
                  : 'border-accent'
              } peer placeholder:text-transparent  border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full`}
            />
            <label
              htmlFor='password'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Password
            </label>
            <PasswordToggle
              setShowPassword={setShowPassword}
              showPassword={showPassword}
            />
          </div>
          <div className='relative'>
            {!passwordMatch && (
              <p
                id='password-mismatch'
                aria-live='polite'
                className='absolute -top-6 right-0 text-right text-error text-sm'
              >
                Password mismatch
              </p>
            )}
            <input
              type={selectedType}
              id='confirm'
              name='confirm'
              autoComplete='off'
              placeholder='Confirm your password'
              aria-labelledby='password-mismatch'
              onChange={checkPasswordMatch}
              className={`${
                !passwordMatch
                  ? 'border-error focus-visible:outline-error'
                  : 'border-accent'
              } peer placeholder:text-transparent  border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full`}
            />
            <label
              htmlFor='confirm'
              className='absolute px-1 text-sm left-4 -translate-y-2.5 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:px-0 bg-main transition'
            >
              Confirm Password
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
            {loading ? 'Creating account' : 'Sign up'}
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
          <p>Have an account?</p>
          <Link
            href='/auth/login'
            className='underline font-bold focus-visible:outline-dashed focus-visible:outline-2'
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
