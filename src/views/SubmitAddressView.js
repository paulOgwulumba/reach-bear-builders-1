import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const SubmitAddressView = () => {
    return (
        <header className="App-header">
            <p>
                Do you consent to submitting your wallet address to the contract?
            </p>
            <div className='horizontal-flex'>
                <p className="App-link">
                    Yes
                </p>
                <p className="App-link">
                    No
                </p>
            </div>
        </header>
    )
}
