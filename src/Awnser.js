import React from 'react';
import QuestionPool from './QuestionPool';

const Question = ({
    tip,
    isCorrect,
}) => (
    <div className="awnser">
        <h5 className="card-title">Awnser</h5>

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
