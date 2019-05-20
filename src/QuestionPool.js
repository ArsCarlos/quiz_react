import React from 'react';
import Awnser from './Awnser';

const generateLetterOption = index => (index + 10).toString(36)

const QuestionPool = ({ questionList, nextQuestion, onSelect, tip, isCorrect }) => {

  const [selected, setSelected] = React.useState(null)

  return (
    <div className="question-pool">
      <br/>
      {/* list options */}
      <div>
        {questionList.map(({ option }, index) => {
          return (
            <div 
              key={index}
              onClick={() => {
                if (selected === null) {
                  setSelected(index); onSelect(index)}
                }
              } 
            >
              <button className={'btn btn-outline-dark question-btn'}>
                {generateLetterOption(index)}. {option}
              </button>
            </div>
          )
        })}
      </div>
      <br/>
      <Awnser
        tip={tip}
        isCorrect={isCorrect}
      />

      {/* next button */}
      <button className="btn btn-success" disabled={selected === null} onClick={() => { nextQuestion(selected); setSelected(null) }}>
        Next
      </button>

    </div>
  );
}


export default QuestionPool;
