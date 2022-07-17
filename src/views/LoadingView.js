import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const LoadingView = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Hold on...
            </p>
        </header>
    )
}
