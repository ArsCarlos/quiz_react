import React from 'react';
import Question from './Question';
import Awnser from './Awnser';
import Timeline from './Timeline';

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
            setAwnsers([])
            return setCurrentQuestion(0)
        }

        let [...x] = document.querySelectorAll('.question-btn');
        x.map((button) => {
                button.disabled = false;
        })
        return setCurrentQuestion(currentQuestion + 1)
    }

    const onSelect = index => {
        const awnser = index === correctAwnser
        setAwnsers([
            ...awnsers,
            awnser
        ])
        setIsCorrect(awnser)
        let [...x] = document.querySelectorAll('.question-btn');
        x.map( (button, idx) => { 
            if (idx !== index)
                button.disabled='disabled'
        })
    }

  return (
    <div>
        <div className="container">
                <div>
                    <h1>TIME QUIZ</h1>
                    <Question
                        tip={tip}
                        isCorrect={isCorrect}
                        text={text}
                        title={title}
                        listOptions={listOptions}
                        onSelect={onSelect}
                        nextQuestion={nextQuestion}
                    />
                </div>
        </div>

        <Timeline 
            questions={questions} 
            awnsers={awnsers} 
        />

    </div>
  );
}

export default Quiz;
