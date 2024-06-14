import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  styled,
} from '@mui/material';


const StyledHeader = styled(AppBar)({
  position: 'fixed',
});

const HeaderLogo = styled('img')({
  maxHeight: '50px',
  width: 'auto',
});

export function UiHomeHeader() {
  return (
    <StyledHeader
      sx={{ backgroundColor: (theme) => theme.palette.background.default }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <HeaderLogo src={'./assets/images/logo1.png'} />
          </Link>
          {<h1>SEARCHBAR</h1>}
          <Box sx={{ flexGrow: 1 }} />
          {<h1>DROPMENU</h1>}
        </Toolbar>
      </Container>
    </StyledHeader>
  );
}

export default UiHomeHeader;
