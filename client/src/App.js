import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";


// Import the Bootstrap CSS
import './assets/css/bootstrap.min.css';
import Header from './components/Header';
import Actors from './components/views/Actors';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Actors />
    </ApolloProvider>
  );
}

export default App;
