import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider,  } from "@apollo/client";
//createHttpLink
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppCarousel from "./components/Carousel/Carousel";
import PostSubmit from "./pages/PostSubmit/PostSubmit";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

const client = new ApolloClient({
  uri: "/graphql",
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
      </div>
    </ApolloProvider>
  );
}

export default App;
