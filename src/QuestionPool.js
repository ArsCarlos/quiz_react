import React from 'react';
import Awnser from './Awnser';

const generateLetterOption = index => (index + 10).toString(36)

const QuestionPool = ({ questionList, nextQuestion, onSelect, tip, isCorrect, indexAnswer }) => {

  const [selected, setSelected] = React.useState(null)
  const [selectedTip, setTip] = React.useState(null)

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
              <div className='answers-btn'>
                {generateLetterOption(index)}. {option}
              </div>
            </div>
          )
        })}
      </div>
      <br/>
      <Awnser
        indexAnswer={indexAnswer}
        tip={tip}
        isCorrect={isCorrect}
        questionList={questionList}
        selectedTip={selectedTip}
        setTip={setTip}
      />

      {/* next button */}
      <button
        className="btn btn-success"
        disabled={selected === null}
        onClick={() => {
          nextQuestion(selected);
          setSelected(null);
          setTip(null)
        }}
      >
        Próxima
      </button>
    </div>
  );
}


export default QuestionPool;
