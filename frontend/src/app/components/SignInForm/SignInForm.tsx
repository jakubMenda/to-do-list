'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { LockOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { signIn, storeAccessToken } from '@/app/api/utils';
import { Routes } from '@/app/enums';
import { doesErrorHaveMessage } from '@/app/utils/typeguards'

const SignInForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<String | null>(null)

  const handleSnackbarClose = () => {
    setErrorMessage(null);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    const data = new FormData(event.currentTarget);

    const body = {
      name: String(data.get('name')),
      password: String(data.get('password'))
    };

    try {
      const response = await signIn(body);

      await storeAccessToken(response.access_token);

      setIsLoading(false);

      router.replace(Routes.Index);

    } catch (error: unknown) {
      setIsLoading(false);

      if (!doesErrorHaveMessage(error)) {
        setErrorMessage('An error occured');
        return;
      }

      setErrorMessage(error.message);
    }
  }

  return (
    <>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Sign In
            </Button>
            <Link href={Routes.SignUp}>
                  Don't have an account? Sign Up
            </Link>
          </Box>
          <Snackbar
            open={!!errorMessage}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            message={errorMessage}
          >
            <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          </Snackbar>
    </>
  )
}

export default SignInForm;
