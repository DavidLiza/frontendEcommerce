import { Container, styled , Box } from '@mui/material';
// import styled from 'styled-components';
import { UiHomeHeader } from '@link-tic/pages/home/ui-home-header'
import { UiLogin } from '@link-tic/pages/login/ui-login'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { LoginRequestData } from '@link-tic/types';
import  axios from 'axios' ;

const StyledLogin = styled(Box)(({ theme }) => ({
  marginTop: 80,
}));


export function Login() {
  
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const submit = async (data: LoginRequestData) => {
    try {
      const response = await axios.post('localhost:8896/login', data);
      console.log('Login successful:', response.data);
    } catch (err) {
      // Handle error
      setError('Invalid email or password');
    }
  };
  

  return (
    <StyledLogin>
      <UiHomeHeader/>
      <UiLogin 
        onSubmit={submit}
      />
    </StyledLogin>
  );
}

export default Login;
