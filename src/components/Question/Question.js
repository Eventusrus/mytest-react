import React from 'react';
import Answers from "./Answers/Answers";

const Question = (props) => (
    <div>
        <p>{props.image.link}</p>
        <small>{props.image.copyright}</small>

        <h2>{props.data.question}</h2>

        <Answers
            answerList={props.answers}/>
    </div>
);

export default Question;