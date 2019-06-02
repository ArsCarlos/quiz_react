import React from 'react';

const Question = ({
    tip,
    isCorrect,
    questionList,
    indexAnswer,
    selectedTip,
    setTip,
}) =>
{
    return (
        <div className="awnser">
            <button type="button" disabled={selectedTip ? 'disabled' : false} class="btn btn-outline-secondary" onClick={() => {
                if (selectedTip === null) {
                    setTip(tip);
                }
            }}>
                Dica
            </button>
            <span className='tip'><strong>{selectedTip}</strong></span>
            <br/><br/>
            {isCorrect === null
                ? null
                : questionList[indexAnswer].explanation
            }

        </div>
);}

export default Question;
