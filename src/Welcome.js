import React from 'react';
import './App.css';
import Quiz from './Quiz';
import { Route, Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="cardWelcome">
        <div className="card">
            <div className="card-header card-title">
                Bem-vindo
            </div>
            <div className="card-body">
                <h3 className="card-title">Time Quiz!!</h3>
                <p>Time Quiz auigaiurguirghiurghuigrhiugigrhiug
                aehaiuehaiuehaiuowduwidgwuigw87fgw87fwgf87wgfw87fg87wgf87
                wufgwufgwufgwf9wgfw98fgw98gfw89gf9wfgw8gf8w9gfw9
                whfwhfw89fhw98fhwf89whfw89fhw89fhw89fhw89fhw89fh8w9fhw
                fw89fhw89fhw98f
                </p>
                <button className="btn btn-success">
                  <Link className="link" to='/quiz'>INICIAR</Link>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Welcome;
