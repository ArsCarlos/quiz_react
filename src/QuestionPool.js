import React from 'react';

const generateLetterOption = index => (index + 10).toString(36)

const QuestionPool = ({ questionList, nextQuestion }) => {

  const [selected, setSelected] = React.useState(NaN)

  return (
    <div className="question-pool">

      {/* list options */}
      <div>
        {questionList.map(({ option }, index) => {
          return (
            <div 
              key={index}
              className={`btn ${selected === index ? 'selected' : '' }`} 
              onClick={() => setSelected(index)} 
            >
              <p>
                {generateLetterOption(index)}. {option}
              </p>
            </div>
          )
        })}
      </div>

      {/* next button */}
      <button onClick={() => { setSelected(NaN); nextQuestion(selected) }}>
        Next
      </button>

    </div>
  );
}


export default QuestionPool;
