
import { Link } from 'react-router-dom';
import {
  Box,
  TextField,
  styled,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { useState } from 'react';



const StyledUiTextField = styled(TextField)(({ theme }) => ({

}));


export function SearchField() {
  
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <Box sx={(theme) => ({
            [theme.breakpoints.down('sm')]: { display: 'none', }, marginLeft: '20 px', paddingLeft: '20px',
      })}>
        <StyledUiTextField 
          id="Search"
          placeholder="¿Que estás buscando?"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />

        <SearchIcon />

    </Box>
  );
}

export default SearchField;
