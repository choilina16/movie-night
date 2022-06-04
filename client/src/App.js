import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
//
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppCarousel from "./components/Carousel/Carousel";
import PostSubmit from "./pages/PostSubmit/PostSubmit";
//import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Credit from "./pages/TmdbCredit/Credit";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <AppCarousel />
        <Footer />
        {/* PostSubmit STAYS HERE FOR STYLING PURPOSES RN */}
        <PostSubmit />
        {/* MovieDetails STAYS HERE FOR STYLING PURPOSES RN */}
        {/* <MovieDetails /> */}
        < Credit />
      </div>
    </ApolloProvider>
  );
}

export default App;
