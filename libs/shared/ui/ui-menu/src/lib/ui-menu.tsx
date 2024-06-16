import { MenuItem, Typography, MenuList } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

  return (
    <StyledUiMenu>
      <MenuIcon />
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
    </StyledUiMenu>
  );
}

export default UiMenu;
