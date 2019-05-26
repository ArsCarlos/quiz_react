import React from 'react';

const Question = ({
    questions,
    awnsers,
}) => (
    <div className='timeline'>
        {questions.map(({ year }, i) => (
            <div key={i} className={i < awnsers.length ? (awnsers[i] ? 'correct' : 'wrong') : 'normal'}>
                <span>{year}</span>
            </div>
        ))}
    </div>
);

export default Question;
