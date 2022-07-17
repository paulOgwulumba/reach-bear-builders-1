import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const ErrorOrSuccessView = ({ isSuccess }) => {
    return (
        <header className="App-header">
            <p>
                {
                    isSuccess?
                    'Your wallet address was whitelisted successfully. Check your wallet for the new tokens.'
                    :
                    'Oops! You came too late. Your address was not whitelisted.'
                }
            </p>
        </header>
    )
}
