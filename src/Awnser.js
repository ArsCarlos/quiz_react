import React from 'react';

const Question = ({
    tip,
    isCorrect,
    questionList,
    indexAnswer
}) => (
    <div className="awnser">
        <p><b>Dica: </b>{tip}</p>
        <h5 className="card-title">Resposta</h5>
        {isCorrect === null
            ? null
            : questionList[indexAnswer].explanation
        }

    </div>
);

export default Question;
