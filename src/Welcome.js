import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="cardWelcome">
        <div className="card">
            <div className="card-header card-title">
                Bem-vindo
            </div>
            <div className="card-body">
                <h3 className="card-title">Time Quiz!!</h3>
                <p>
                  Seja Bem Vindo!
                </p>
                <p> Esse quiz percorre o tempo pelos anos 2009 à 2018 com uma pergunta de um tema variado para cada ano. Existem dicas para cada pergunta. Boa sorte!</p>
                <button className="btn btn-success">
                  <Link className="link" to='/quiz'>INICIAR</Link>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Welcome;
