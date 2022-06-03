// using a new npm package- MUI (react component library)
import * as React from 'react';
import { useState } from 'react';
// importing mutations to writer Users to dbTODO: 

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../util/mutations';

// importing in for MUI
import { makeStyles } from '@mui/styles';
import { TextField, Autocomplete, Stack, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import './inputBox.css';

// // TODO:
// import scrapeWatchlist from '../../util/webScraper'

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

// MUI styling for changing colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#DA251E',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#abc',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#abc',
          },
          color: '#abc',
        },
      },
    },
  },
});

// MUI styling for font change
const useStyles = makeStyles({
  root: {
    color: '#abc',
  },
  inputBox: {
    '& .MuiFormLabel-root': {
      color: '#abc',
    },
  },
  helperText: {
    '& .MuiFormHelperText-root': {
      color: '#abc !important',
    },
  },
});

// MUI styling for the username input box
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#abc',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#abc',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#abc',
    },
  },
});

function InputBox() {
  // LOGIC FOR THE INPUT BOX
  const [usernames, setUsernames] = useState([]);
  const [inputData, setInputData] = useState('');
  const [movie, setMovieGenre] = useState('');
  const [language, setMovieLanguage] = useState('');

  // TODO: adding mutation
  const [addUser] = useMutation(ADD_USER);
  //console.log(language);
  //console.log(movie);

  // const handleFormSubmit = (event) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();

  //   setUsername('');
  //   setMovieGenre('');
  //   setMovieLanguage('');
  // };

  const handleAddUsername = () => {
    const currentUsername = inputData;
    console.log(currentUsername);
    const newUsernames = [...usernames, currentUsername];
    setUsernames(newUsernames);
    setInputData('');
    // scrapeWatchlist(currentUsername);


    //TODO: trying to add users to db
    // try {
    //   const { data } = addUser({
    //     variables: { inputData },
    //   });
    //   console.log(data);
    // } catch (err) {
    //   console.error(err);
    // }
    

    console.log(newUsernames);
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const classes = useStyles();

  return (
    <div>
      <Stack className={classes.helperText} noValidate autoComplete="off">
        {/* where the usernames will popular */}
        <div className="list">
          {usernames.map((item) => {
            return <p key="{item.value}">{item.value}</p>;
          })}
          PLACEHOLDER
        </div>

        {/* input box for the usernames */}
        <CssTextField
          label="Usernames"
          id="custom-css-outlined-input input-box"
          className={classes.inputBox}
          variant="outlined"
          value={inputData}
          onChange={handleInputChange}
          helperText="Enter 1 username at a time"
          sx={{ width: 400, p: 1 }}
          inputProps={{ className: classes.root }}
        />

        <ThemeProvider theme={theme}>
          {/* button to add the usernames */}
          <Button
            variant="contained"
            id="username-button"
            size="small"
            value="ADD"
            onClick={handleAddUsername}
            sx={{ width: 30 }}
            style={{ margin: '0 auto', display: 'flex' }}
          >
            +
          </Button>
        </ThemeProvider>

        {/* choosing movie genre from list*/}
        <ThemeProvider theme={theme}>
          <Autocomplete
            disablePortal
            onInputChange={(event, newMovie) => {
              setMovieLanguage(newMovie);
            }}
            id="combo-box-demo"
            options={movieGenre}
            sx={{ width: 400, p: 1 }}
            className={classes.inputBox}
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
            sx={{ width: 400, p: 1 }}
            className={classes.inputBox}
            renderInput={(params) => <TextField {...params} label="Language" />}
          />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          {/* button to submit and bring you to next page where you will see the results of watch list*/}
          <Button
            sx={{ width: 100 }}
            variant="contained"
            style={{ margin: '0 auto', display: 'flex' }}
          >
            SUBMIT
          </Button>
        </ThemeProvider>
      </Stack>
    </div>
  );
}

export default InputBox;
