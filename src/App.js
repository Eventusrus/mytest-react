import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import QuestionBuilder from "./containers/QuestionBuilder/QuestionBuilder";

class App extends Component {
    render() {
        return (
            <Layout>
                <div>Page count 1/2</div>
                <QuestionBuilder/>
                <div>Button next</div>
            </Layout>
        );
    }
}

export default App;
