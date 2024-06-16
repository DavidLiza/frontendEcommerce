import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  styled,
} from '@mui/material';
import { SearchField } from '@link-tic/shared/ui/search-field'
import { UiMenu } from '@link-tic/shared/ui/ui-menu'


const StyledHeader = styled(AppBar)(({theme}) => ({
  position: 'fixed'
}));

const HeaderLogo = styled('img')({
  maxHeight: '50px',
  width: 'auto',
});

export function UiHomeHeader() {
  return (
    <StyledHeader
      sx={{ backgroundColor: (theme) => theme.palette.background.default }}
    >
      <Container maxWidth="xl" sx={{ m: 2 }}>
        <Toolbar disableGutters sx={{ m: 2 }}>
          <Link to="/">
            <HeaderLogo src={'./assets/images/logo1.png'} />
          </Link>
          <SearchField />
          <Box sx={{ flexGrow: 1 }} />
          <UiMenu />
        </Toolbar>
      </Container>
    </StyledHeader>
  );
}

export default UiHomeHeader;
