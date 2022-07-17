import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const DeployerOrAttacherView = () => {
    return (
        <header className="App-header">
            <p>
                What would you like to do?
            </p>
            <div className='horizontal-flex'>
                <p className="App-link">
                    Create new contract
                </p>
                <p className="App-link">
                    Attach to existing contract
                </p>
            </div>
        </header>
    )
}
