import React from 'react';
import Answer from "./Answer/Answer";

const Answers = (props) => {

    let answerComponents = Object.keys(props.answerList).map(keyAnswer => {
        return <Answer key={keyAnswer} text={props.answerList[keyAnswer].text}/>;
    });

    return (
        <div>
            {answerComponents}
        </div>
    );
};

export default Answers;