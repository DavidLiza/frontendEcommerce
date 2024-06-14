import { Container, styled , Box } from '@mui/material';
// import styled from 'styled-components';
import { UiHomeHeader } from '@link-tic/pages/home/ui-home-header'
import { UiHomeBanner } from '@link-tic/pages/home/ui-home-banner'


const StyledHome = styled(Box)(({ theme }) => ({
  marginTop: 80,
}));

export function Home() {
  return (
    <StyledHome>
      <UiHomeHeader/>
      <UiHomeBanner/>
    </StyledHome>
  );
}

export default Home;
