import React, { Component } from 'react';
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import { Grid, LinearProgress } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Error from './components/Error';
import Wizards from './components/Wizards';
import Filter from './components/Filter';

if (!process.env.REACT_APP_GRAPHQL_ENDPOINT) {
  throw new Error(
    'REACT_APP_GRAPHQL_ENDPOINT environment variable not defined',
  );
}

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

const WIZARDS_QUERY = gql`
  query wizards($orderBy: Wizard_orderBy!) {
    wizards(first: 1000, orderBy: $orderBy, orderDirection: asc) {
      id
      tokenId
      power
      owner
      element
      costWei
      blockNumber
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'tokenId',
    };
  }

  render() {
    const { orderBy } = this.state;

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Grid container direction="column">
            <Header onHelp={this.toggleHelpDialog} />
            <Filter
              orderBy={orderBy}
              onOrderBy={field =>
                this.setState(state => ({ ...state, orderBy: field }))
              }
            />
            <Grid item>
              <Grid container>
                <Query
                  query={WIZARDS_QUERY}
                  variables={{
                    orderBy: orderBy,
                  }}
                >
                  {({ data, error, loading }) => {
                    return loading ? (
                      <LinearProgress
                        variant="query"
                        style={{ width: '100%' }}
                      />
                    ) : error ? (
                      <Error error={error} />
                    ) : (
                      <Wizards wizards={data.wizards} />
                    );
                  }}
                </Query>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
