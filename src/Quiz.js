import React from 'react';
import Question from './Question';
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

        let [...answers] = document.querySelectorAll('.answers-btn');
        answers.map((answer) => answer.className = 'answers-btn')
        return setCurrentQuestion(currentQuestion + 1)
    }

    const onSelect = index => {
        const awnser = index === correctAwnser
        setAwnsers([
            ...awnsers,
            awnser
        ])
        setIsCorrect(awnser)
        let [...answerButtons] = document.querySelectorAll('.answers-btn');
        /* const [correct]= answerButtons.filter( (button, idx) => {
            if (idx === index)
                 return button;
            return '';
        }); */
        answerButtons.forEach((answer, idx) => {
            if (idx === index)
                answer.className = 'answers-btn answers-btn_selected';
            else
                answer.className = 'answers-btn disabled-div';
        })
    }

  return (
    <React.Fragment>
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

    </React.Fragment>
  );
}

export default Quiz;
