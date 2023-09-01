'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { PersonOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { signUp } from '@/app/api/api';
import { LocalStorageKeys, Routes } from '@/app/enums';
import { doesErrorHaveMessage } from '@/app/utils/typeguards'
import { signUpValidationSchema } from './validation';

const SignUpForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<String | null>(null)

  const handleSnackbarClose = () => {
    setErrorMessage(null);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = {
      name: String(data.get('name')),
      password: String(data.get('password')),
      passwordRepeat: String(data.get('passwordRepeat'))
    };

    try {
      await signUpValidationSchema.validateAsync(body);

      const response = await signUp(body);

      localStorage.setItem(LocalStorageKeys.AccessToken, response.access_token);

      router.replace(Routes.Index);

    } catch (error: unknown) {
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
            marginTop: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwordRepeat"
              label="Repeat password"
              type="password"
              id="password-repeat"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Link href={Routes.SignIn}>
                  Already have an account? Sign Ip
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

export default SignUpForm;
