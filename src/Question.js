import React from 'react';
import QuestionPool from './QuestionPool';


const Question = ({
    title,
    text,
    tip,
    isCorrect,
    listOptions,
    onSelect,
    nextQuestion
}) => (
        <div className="card">
            <div className="card-header card-title">
                {title}
            </div>
            <div className="card-body">
                <h5 className="card-title">{text}</h5>
                <QuestionPool 
                    questionList={listOptions} 
                    nextQuestion={nextQuestion} 
                    onSelect={onSelect} 
                    tip={tip}
                    isCorrect={isCorrect}
                />
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                
            </div>
        </div>

);

export default Question;
