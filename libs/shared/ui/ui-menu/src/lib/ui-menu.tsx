import { MenuItem, Typography, MenuList } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Button,
  Box,
  Avatar,
  Popover,
  Toolbar,
  styled,
} from '@mui/material';



const StyledUiMenu = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderRadius: 100,
  gap: theme.spacing(2),
  padding: theme.spacing(1, 2),
  '&:hover': {
    borderColor: theme.palette.grey[200],
  },
}));

interface UiMenuProps {
  userSessionId?: string;
}


export function UiMenu( {
  userSessionId,
} : UiMenuProps) {
  // const { userSession, dataUser } = useSelector(getUserState);
  const [open, setOpen] = useState<boolean>(false);
  const [logged, logoutUser] = useState<string>();
  const letterAvatar = "TT";
  
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(!openMenu);
  };

  return (
    <>
    
    <Box sx={{ minWidth: 200 }}>

      <StyledUiMenu 
        onClick={handleClick}>
        <MenuIcon />
        <Avatar
            color={letterAvatar && 'primary'}
            sx={{
              width: 32,
              height: 32,
              background: (theme) => letterAvatar && theme.palette.primary.main,
            }}
          >
          {letterAvatar && letterAvatar}
        </Avatar>
      </StyledUiMenu>


      <Popover
        elevation={2}
        open={openMenu}
        anchorEl={anchorEl}
        onClose={() => setOpenMenu(!openMenu)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuList>
          {userSessionId
            ? [
                <MenuItem>
                  <Typography onClick={() => setOpen(true)}>
                    My Information
                  </Typography>
                </MenuItem>,
                <MenuItem>
                  <Typography onClick={() => logoutUser(userSessionId)}>
                    LogOut
                  </Typography>
                </MenuItem>
              ]
            : [
                <MenuItem>
                  <Link to={'/login'}>Login</Link>
                </MenuItem>,
                <MenuItem disabled>
                  <Link to={'/register'}>Register</Link>
                </MenuItem>,
              ]}
        </MenuList>
      </Popover>

      </Box>
    </>
  );
}

export default UiMenu;
