import React from 'react';
import QuestionPool from './QuestionPool';

import questions from './data.json'

const Question = () => {

    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const question = questions[currentQuestion]

    const {
        title,
        text,
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
    <div className="question">
        
        <h2> {title} </h2>
        
        <div> {text} </div>
        
        <QuestionPool questionList={listOptions} nextQuestion={nextQuestion} />
    </div>
  );
}

export default Question;
