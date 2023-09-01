import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const SignInLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          background: '#fff',
          padding: '2rem',
          marginTop: '50%',
          borderRadius: 2,
          boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.25)'
        }}>
        {children}
      </Box>
    </Container>
  )
}

export default SignInLayout;
