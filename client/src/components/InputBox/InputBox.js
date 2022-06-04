// using a new npm package- MUI (react component library)
import * as React from 'react';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../util/mutations';

// importing in for MUI
import { makeStyles } from '@mui/styles';
import {
  TextField,
  Autocomplete,
  Stack,
  Button,
  AlertTitle,
} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import FlipCard from '../../pages/PostSubmit/FlipCard';
import './inputBox.css';

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
  const [result, setResult] = useState({});
  const [inputData, setInputData] = useState('');
  const [addUser] = useMutation(ADD_USER);

  const handleAddUsername = async (e) => {
    e.preventDefault();

    const currentUsername = inputData;
    console.log(currentUsername);
    // const newUsernames = [...usernames, { value: inputData }];
    const newUsernames = [...usernames, currentUsername];
    console.log(newUsernames);
    setUsernames(newUsernames);
    setInputData('');
    // await setUsernames(newUsernames);
    // setInputData('');

    console.log(usernames);
    //event.preventDefault();
    // console.log(currentUsername);

    try {
      const { data } = await addUser({
        variables: { username: currentUsername },
      });
      // window.location.reload();
      console.log(usernames);
      console.log(data);

      const something = data.addUser.savedMovies;
      console.log(something);

      const movieData = something.map((data) => ({
        image: data.poster_url,
        title: data.title,
        year: data.year,
        cast: data.cast,
        genre: data.genre,
        language: data.language,
        director: data.director,
        runtime: data.runtime,
      }));

      setResult(movieData);
    } catch (err) {
      console.log('nah');
      console.error(err);
    }
  };

  console.log(usernames);
  // movies save into this state
  console.log(result);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const classes = useStyles();

  // const { savedMovies = '' } = result;
  // console.log(result);

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
            // onInputChange={(event, newMovie) => {
            //   setMovieLanguage(newMovie);
            // }}
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
            // onInputChange={(event, newLanguage) => {
            //   setMovieGenre(newLanguage);
            // }}
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
      {/* <PostSubmit movies={result} /> */}
      <div className="container">
        {/* Card Row */}
        <div className="row card-row">
          <div className="header-container">
            {/* note: Could make it so each 3 usernames populate in place of 'you' (ex. Here's some movies a, b, and c have in common) */}
            <p className="header-text">
              Here's some movies you have in common...
            </p>
          </div>
          {/* ...mapping over each object in the `Cards` array of objects */}
          {result.map((card) => (
            <FlipCard card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InputBox;
