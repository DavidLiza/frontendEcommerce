// import { Container, styled } from '@mui/material';
import styled from 'styled-components';
import { UiHomeBanner } from '@link-tic/pages/home/ui-home-banner'

const StyledHome = styled.div`
  color: pink;
`;


export function Home() {
  return (
    <StyledHome>
      <UiHomeBanner></UiHomeBanner>
    </StyledHome>
  );
}

export default Home;
