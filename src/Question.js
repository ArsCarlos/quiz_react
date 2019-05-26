import React from 'react';
import QuestionPool from './QuestionPool';


const Question = ({
    title,
    text,
    tip,
    isCorrect,
    listOptions,
    onSelect,
    nextQuestion,
    indexAnswer,
}) => (
        <div className="card">
            <div className="card-header card-title">
                <strong>{title}</strong>
            </div>
            <div className="card-body">
                <h5 className="card-title">{text}</h5>
                <QuestionPool 
                    questionList={listOptions} 
                    nextQuestion={nextQuestion} 
                    onSelect={onSelect} 
                    tip={tip}
                    isCorrect={isCorrect}
                    indexAnswer={indexAnswer}
                />
            </div>
        </div>

);

export default Question;
