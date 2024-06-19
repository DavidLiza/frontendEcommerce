import { Container, FormControl ,styled , Box, TextField, Button, Alert , AlertProps} from '@mui/material';
import { LoginRequestData } from '@link-tic/types';
import { useEffect , useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const StyledUiLogin = styled(Box)(({ theme }) => ({
  marginTop: 80,
}));

const LoginContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
}));

const LoginForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#fff',
  borderRadius: 8
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  margin: '15px',
  padding: '10px',
  fontSize: '1em',
  borderRadius: '4px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: 'white'
}));



interface UiLoginProps {
  // errorMessage : string | undefined ,
  loginFailed : boolean ,
  onSubmit : (data: LoginRequestData) => void
}

export function UiLogin({
  onSubmit,
  // errorMessage,
  loginFailed,
} : UiLoginProps ) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <LoginContainer>
      <LoginForm onSubmit={(e) => { e.preventDefault(); onSubmit({ email, password }); }} >
        <h2>Login</h2>
        <TextFieldStyled required placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <TextFieldStyled required type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        {loginFailed && (
          <Box mt={3}>
            <Alert variant="filled" severity="error">
              {'Invalid email or password'}
            </Alert>
          </Box>
        )}

        <StyledButton type="submit" fullWidth variant="contained" onClick={() => {console.log('clicked'); onSubmit({ email, password });}}>
          Login
        </StyledButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default UiLogin;
