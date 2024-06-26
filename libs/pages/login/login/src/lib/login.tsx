import { styled , Box, Alert } from '@mui/material';
import { UiHomeHeader } from '@link-tic/pages/home/ui-home-header'
import { UiLogin } from '@link-tic/pages/login/ui-login'
import { useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { LoginRequestData } from '@link-tic/types';
import  axios from 'axios' ;
import { USERAPI } from '@link-tic/types'

const StyledLogin = styled(Box)(({ theme }) => ({
  marginTop: 80,
}));

const StyledErrorMessage = styled(Alert)({
  marginBottom: 15,
});


export function Login() {
  
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const submit = async (data: LoginRequestData) => {
    try {
      const response = await axios.post( USERAPI.login , data);
      console.log(response)
      if (response?.data?.code == "LTT001") {
        localStorage.setItem('userId', response.data.result.userId );
        navigate('/');
      } else {
        setError(response?.data?.error);
      }
    } catch (err) {
      // Handle error
      setError('Invalid email or password');
    }
  };
  

  return (
    <StyledLogin>
      <UiHomeHeader/>
      <UiLogin 
        loginFailed={!!error}
        onSubmit={submit}
      />
      {error && <StyledErrorMessage severity="error">{error}</StyledErrorMessage>}
    </StyledLogin>
  );
}

export default Login;
















