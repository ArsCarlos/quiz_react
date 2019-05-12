import React from 'react';
import QuestionPool from './QuestionPool';

const Question = ({
    title,
    text,
    listOptions,
    nextQuestion
}) => (
    <div className="question">
        
        <h2> Question: {title} </h2>
        
        <div> {text} </div>
        
        <QuestionPool questionList={listOptions} nextQuestion={nextQuestion} />
    </div>
);

export default Question;
