import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

export const AttachToContractView = ({ joinContract }) => {
    const [addr, setAddr] = useState('');

    const onChange = (event) => {
        setAddr(event.target.value);
    }

    const onSubmit = () => {
        joinContract(addr)
    }

    return (
        <header className="App-header">
            <p>
                Please enter the contract address.
            </p>
            <div>
                <textarea onChange={onChange}>{ addr }</textarea>
            </div>
            <div className='horizontal-flex'>
                <p className="App-link" onClick={onSubmit}>
                    Attach to contract
                </p>
            </div>
        </header>
    )
}
