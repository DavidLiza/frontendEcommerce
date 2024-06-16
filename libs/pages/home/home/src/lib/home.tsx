import { Container, styled , Box } from '@mui/material';
// import styled from 'styled-components';
import { UiHomeHeader } from '@link-tic/pages/home/ui-home-header'
import { UiHomeBanner } from '@link-tic/pages/home/ui-home-banner'
import { UiCatalog } from '@link-tic/pages/home/ui-catalog'

const StyledHome = styled(Box)(({ theme }) => ({
  marginTop: 80,
}));

export function Home() {
  return (
    <StyledHome>
      <UiHomeHeader/>
      <UiHomeBanner/>
      <UiCatalog/>
    </StyledHome>
  );
}

export default Home;
