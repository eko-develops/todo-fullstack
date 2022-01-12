import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const APOLLO_URI = process.env.REACT_APP_APOLLO_URI;
console.log(APOLLO_URI);

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query Users {
        users {
          id
          firstName
          lastName
          todos {
            id
            title
            message
            priority
            authorId
          }
        }
      }
    `,
  })
  .then((data) => {
    console.log(data);
  });

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
