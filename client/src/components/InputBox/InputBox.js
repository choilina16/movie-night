import * as React from 'react';
import TextField from '@mui/material/TextField';
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

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function InputBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="username-container">
        <TextField id="outlined-basic" label="Usernames" variant="outlined" />
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
