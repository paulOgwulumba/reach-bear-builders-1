import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const SubmitAddressView = ({ resolve }) => {
    return (
        <header className="App-header">
            <p>
                Do you consent to submitting your wallet address to the contract?
            </p>
            <div className='horizontal-flex'>
                <p className="App-link" onClick={() => resolve.resolver()}>
                    Yes
                </p>
                <p className="App-link" onClick={() => { window.location.href = 'https://docs.reach.sh' }}>
                    No
                </p>
            </div>
        </header>
    )
}
