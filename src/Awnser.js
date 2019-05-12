import React from 'react';
import QuestionPool from './QuestionPool';

const Question = ({
    tip,
    isCorrect,
}) => (
    <div className="awnser">
        <h2>Awnser</h2>

        <p><b>Tip: </b>{tip}</p>
        {console.log(isCorrect)}
        {isCorrect === null
            ? null
            : isCorrect
                ? "Correto"
                : "Errado"
        }

    </div>
);

export default Question;
