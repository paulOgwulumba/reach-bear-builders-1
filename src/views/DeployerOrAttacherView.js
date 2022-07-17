import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const DeployerOrAttacherView = ({ createContract, joinContract }) => {
    return (
        <header className="App-header">
            <p>
                What would you like to do?
            </p>
            <div className='horizontal-flex'>
                <p className="App-link" onClick={createContract}>
                    Create new contract
                </p>
                <p className="App-link" onClick={joinContract}>
                    Attach to existing contract
                </p>
            </div>
        </header>
    )
}
