import * as React from 'react';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
// import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import './inputBox.css';

const movieGenre = [
  { label: 'Action', id: 1 },
  { label: 'Adventure', id: 2 },
  { label: 'Animation', id: 3 },
  { label: 'Comedy', id: 4 },
  { label: 'Documentary', id: 5 },
  { label: 'Drama', id: 6 },
  { label: 'Family', id: 7 },
  { label: 'Fantasy', id: 8 },
  { label: 'History', id: 9 },
  { label: 'Horror', id: 10 },
  { label: 'Music', id: 11 },
  { label: 'Mystery', id: 12 },
  { label: 'Romance', id: 13 },
  { label: 'Science Fiction', id: 14 },
  { label: 'Thriller', id: 15 },
  { label: 'TV Movie', id: 16 },
  { label: 'War', id: 17 },
  { label: 'Western', id: 18 },
];

const movieLanguage = [
  { label: 'English', id: 1 },
  { label: 'Spanish', id: 2 },
  { label: 'Chinese', id: 3 },
  { label: 'Korean', id: 4 },
  { label: 'Japanese', id: 5 },
  { label: 'French', id: 6 },
];

// mui styling
const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'red',
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function InputBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="username-container">
        {/* <TextField id="outlined-basic" label="Usernames" variant="outlined" /> */}
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Bootstrap
          </InputLabel>
          <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
        </FormControl>
        <Button variant="contained" size="small">
          ADD
        </Button>
      </div>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={movieGenre}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Genre" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={movieLanguage}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Language" />}
      />
      <Button variant="contained">SUBMIT</Button>
    </div>
  );
}

export default InputBox;
