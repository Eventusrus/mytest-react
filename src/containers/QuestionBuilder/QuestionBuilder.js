import React, {Component} from 'react';
import Question from "../../components/Question/Question";

import axios from 'axios';

class QuestionBuilder extends Component {
    state = {
        questionNumber: 0,
        currentQuestion: null
    };

    componentDidMount() {
        axios.get('https://mytest-react.firebaseio.com/questionList.json')
            .then(response => {
                this.setState({currentQuestion: response.data[this.state.questionNumber]});
            });
    }

    render() {
        let question = '<p>Загрузка</p>';

        if (this.state.currentQuestion) {
            question = <Question
                            number={this.state.questionNumber}
                            data={this.state.currentQuestion}
                            image={this.state.currentQuestion.img}
                            answers={this.state.currentQuestion.answer}/>
        }

        return(
            <div>
                {question}
            </div>
        );
    }
}

export default QuestionBuilder;