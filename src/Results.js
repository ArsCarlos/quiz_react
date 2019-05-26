import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

const calculateRightAnswers = (answers) => {
  const correct = answers.filter( (answer) => {
    return answer === true
  })
  return correct.length;
}

const Results = (props) => {
  return (
    <div className="cardResults">
        <div className="card scoreContainer">
            <div className="card-body">
                <h1 className="card-title">RESULTADOS</h1>
                <p className='score'>
                 {`${calculateRightAnswers(props.location.state)}/${props.location.state.length}`}
                 </p>
                <div>
                  <button className="btn btn-secondary">
                    <Link className="link" to='/'>PAGINA INICIAL</Link>
                  </button>
                  <button className="btn btn-success">
                    <Link className="link" to='/quiz'>REPETIR</Link>
                  </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Results;
