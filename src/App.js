import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { 
  ConnectAccountView, 
  ConnectionErrorView, 
  DeployerOrAttacherView, 
  LoadingView,
  ContractCreatedView,
  AttachToContractView,
  SubmitAddressView,
  ErrorOrSuccessView
} from './views';

const Views = {
  CONNECT_ACCOUNT: 0,
  DEPLOYER_OR_ATTACHER: 1,
  LOADING: 2,
  CONNECTION_ERROR: 3,
  CONTRACT_CREATED: 4,
  ATTACH_TO_CONTRACT: 5,
  SUBMIT_ADDRESS: 6,
  ERROR_OR_SUCCESS: 7
}

function App() {
  
  const [currentView, setCurrentView] = useState(7);

  return (
    <div className="App">
      {
        currentView === Views.CONNECT_ACCOUNT && 
        <ConnectAccountView />
      }

      {
        currentView === Views.DEPLOYER_OR_ATTACHER &&
        <DeployerOrAttacherView />
      }

      {
        currentView === Views.LOADING &&
        <LoadingView />
      }

      {
        currentView === Views.CONNECTION_ERROR && 
        <ConnectionErrorView />
      }

      {
        currentView === Views.CONTRACT_CREATED && 
        <ContractCreatedView addresses={["nnamdi", "kanu"]}/>
      }

      {
        currentView === Views.ATTACH_TO_CONTRACT && 
        <AttachToContractView />
      } 

      {
        currentView === Views.SUBMIT_ADDRESS &&
        <SubmitAddressView />
      }

      {
        currentView === Views.ERROR_OR_SUCCESS &&
        <ErrorOrSuccessView isSuccess={false}/>
      }

    </div>
  );
}

export default App;
