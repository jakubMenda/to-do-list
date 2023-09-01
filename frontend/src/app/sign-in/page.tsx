import type { Metadata } from 'next'
import SignInForm from '@/app/components/SignInForm/SignInForm';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Just sign in',
}

const SignIn = () => {
  return (
    <SignInForm />
  )
}

export default SignIn;
