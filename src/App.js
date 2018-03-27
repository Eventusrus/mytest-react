import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import QuestionBuilder from "./containers/QuestionBuilder/QuestionBuilder";

class App extends Component {
  render() {
    return (
      <Layout>
        <QuestionBuilder/>
      </Layout>
    );
  }
}

export default App;
