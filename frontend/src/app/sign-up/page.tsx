import type { Metadata } from 'next'
import SignUpForm from '@/app/components/SignUpForm/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Just sign up',
}

const SignUp = () => {
  return (
    <SignUpForm />
  )
}

export default SignUp;
