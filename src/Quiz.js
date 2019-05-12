import React from 'react';
import Question from './Question';
import Awnser from './Awnser';

import questions from './data.json'

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [isCorrect, setIsCorrect] = React.useState(null)
    const [awnsers, setAwnsers] = React.useState([])
    const question = questions[currentQuestion]

    const {
        title,
        text,
        tip,
        listOptions,
        correctAwnser
    } = question

    const nextQuestion = index => {
        // TODO: validate and register awnser
        setIsCorrect(null)

        console.log(awnsers)
        // Go to next
        if (currentQuestion + 1 >= questions.length) {
            alert("Finished")
            return setCurrentQuestion(0)
        }
        return setCurrentQuestion(currentQuestion + 1)
    }

    const onSelect = index => {
        const awnser = index === correctAwnser
        setAwnsers([
            ...awnsers,
            awnser
        ])
        setIsCorrect(awnser)
    }

  return (
    <div className="container">
        <Question 
            text={text} 
            title={title} 
            listOptions={listOptions}
            onSelect={onSelect}
            nextQuestion={nextQuestion}
        />

        <Awnser
            tip={tip}
            isCorrect={isCorrect}
        />
    </div>
  );
}

export default Quiz;
