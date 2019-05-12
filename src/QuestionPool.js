import React from 'react';

const generateLetterOption = index => (index + 10).toString(36)

const QuestionPool = ({ questionList, nextQuestion, onSelect }) => {

  const [selected, setSelected] = React.useState(null)

  return (
    <div className="question-pool">

      {/* list options */}
      <div>
        {questionList.map(({ option }, index) => {
          return (
            <div 
              key={index}
              className={`btn ${selected === index ? 'selected' : '' }`} 
              onClick={() => {
                if (selected === null) {
                  setSelected(index); onSelect(index)}
                }
              } 
            >
              <p>
                {generateLetterOption(index)}. {option}
              </p>
            </div>
          )
        })}
      </div>

      {/* next button */}
      <button disabled={selected === null} onClick={() => { nextQuestion(selected); setSelected(null) }}>
        Next
      </button>

    </div>
  );
}


export default QuestionPool;
