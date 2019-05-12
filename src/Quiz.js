import React from 'react';
import Question from './Question';

import questions from './data.json'

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const question = questions[currentQuestion]

    const {
        title,
        text,
        tip,
        listOptions
    } = question

    const nextQuestion = index => {
        // TODO: validate and register awnser

        // Go to next
        if (currentQuestion + 1 >= questions.length) {
            alert("Finished")
            return setCurrentQuestion(0)
        }
        return setCurrentQuestion(currentQuestion + 1)
    }

  return (
    <div className="container">
        <Question 
            text={text} 
            title={title} 
            listOptions={listOptions} 
            nextQuestion={nextQuestion}
        />

        <div className="awnser">
            <h2>Awnser</h2>

            <p><b>Tip: </b>{tip}</p>
        </div>
    </div>
  );
}

export default Quiz;
