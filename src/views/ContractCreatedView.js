import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const ContractCreatedView = ({ addresses }) => {
    return (
        <header className="App-header">
            <div className='horizontal-flex'>
                <p style={{marginRight: '20px'}}>
                    Contract address:
                </p>
                <p>
                    {`bigNumber: '0xab'`}
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
