import React from 'react';
import QuestionPool from './QuestionPool';

const Question = ({
    title,
    text,
    listOptions,
    onSelect,
    nextQuestion
}) => (
    <div className="question">
        
        <h2> Question: {title} </h2>
        
        <div> {text} </div>
        
        <QuestionPool questionList={listOptions} nextQuestion={nextQuestion} onSelect={onSelect} />
    </div>
);

export default Question;
