import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const AttachToContractView = () => {
    return (
        <header className="App-header">
            <p>
                Please enter the contract address.
            </p>
            <div>
                <textarea></textarea>
            </div>
            <div className='horizontal-flex'>
                <p className="App-link">
                    Attach to contract
                </p>
            </div>
        </header>
    )
}
