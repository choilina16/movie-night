import * as React from 'react';
import { TextField, Autocomplete, Stack, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    padding: '30px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    padding: '30px',
  },
});

function InputBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Stack spacing={2} direction="column">
          <TextField
            id="outlined-basic"
            label="Usernames"
            variant="outlined"
            sx={{ width: 300, p: 1 }}
          />
          <Button variant="contained" size="small" sx={{ width: 50 }}>
            ADD
          </Button>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={movieGenre}
            sx={{ width: 300, p: 1 }}
            renderInput={(params) => <TextField {...params} label="Genre" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={movieLanguage}
            sx={{ width: 300, p: 1 }}
            renderInput={(params) => <TextField {...params} label="Language" />}
          />
          <Button
            className={classes.submitButton}
            sx={{ width: 100 }}
            variant="contained"
          >
            SUBMIT
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default InputBox;
