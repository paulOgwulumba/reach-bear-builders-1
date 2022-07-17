import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const ContractCreatedView = ({ addresses, contractAddress }) => {
    return (
        <header className="App-header">
            <div className='horizontal-flex'>
                <p style={{marginRight: '20px'}}>
                    Contract address:
                </p>
                <p>
                    {contractAddress}
                </p>
            </div>
            <p>
                List of addresses that have been whitelisted
            </p>
            <ul>
                {
                    addresses.map(address => (
                        <li>{address}</li>
                    ))
                }
            </ul>
        </header>
    )
}
