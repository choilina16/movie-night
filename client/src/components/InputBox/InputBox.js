// using a new npm package- MUI (react component library)
import * as React from 'react';
import { useState } from 'react';
// importing in for MUI
import { TextField, Autocomplete, Stack, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// lists that the user will choose from
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
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
  },
});

export default function InputBox() {
  // LOGIC FOR THE INPUT BOX
  const [usernames, setUsernames] = useState([]);
  const [inputData, setInputData] = useState('');
  const [movie, setMovieGenre] = useState('');
  const [language, setMovieLanguage] = useState('');
  console.log(language);
  console.log(movie);

  // const handleFormSubmit = (event) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();

  //   setUsername('');
  //   setMovieGenre('');
  //   setMovieLanguage('');
  // };

  const handleAddUsername = () => {
    const newUsernames = [...usernames, { value: inputData }];
    setUsernames(newUsernames);
    setInputData('');
    console.log(usernames);
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Stack>
        {/* where the usernames will popular */}
        <div className="list">
          {usernames.map((item) => {
            return <p>{item.value}</p>;
          })}
          PLACEHOLDER
        </div>

        {/* input box for the usernames */}
        <TextField
          id="outlined-basic"
          label="Usernames"
          variant="outlined"
          value={inputData}
          onChange={handleInputChange}
          helperText="Enter 1 username at a time"
          sx={{ width: 300, p: 1, }}
        />
        {/* button to add the usernames */}
        <Button
          variant="contained"
          size="small"
          value="ADD"
          onClick={handleAddUsername}
          sx={{ width: 50 }}
        >
          ADD
        </Button>

        {/* choosing movie genre from list*/}
        <Autocomplete
          disablePortal
          // inputValue={movie}
          onInputChange={(event, newMovie) => {
            setMovieLanguage(newMovie);
          }}
          id="combo-box-demo"
          options={movieGenre}
          sx={{ width: 300, p: 1 }}
          renderInput={(params) => <TextField {...params} label="Genre" />}
        />

        {/* choosing movie language from list */}
        <Autocomplete
          disablePortal
          // inputValue={language}
          onInputChange={(event, newLanguage) => {
            setMovieGenre(newLanguage);
          }}
          id="combo-box-demo"
          options={movieLanguage}
          sx={{ width: 300, p: 1 }}
          renderInput={(params) => <TextField {...params} label="Language" />}
        />

        {/* button to submit and bring you to next page where you will see the results of watch list*/}
        <Button
          className={classes.submitButton}
          sx={{ width: 100 }}
          variant="contained"
        >
          SUBMIT
        </Button>
      </Stack>
    </div>
  );
}
