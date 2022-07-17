import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
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
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect }  from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

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

const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({ providerEnv: "TestNet", MyAlgoConnect }))

function App() {
  
  const [currentView, setCurrentView] = useState(Views.CONNECT_ACCOUNT);
  const [whitelist, setWhitelist] = useState([]);
  const [account, setAccount] = useState();
  const [contractAddress, setContractAddress] = useState('');
  const [walletSubmissionPromise, setWalletSubmissionPromise] = useState({ resolver: null });
  const [outcome, setOutcome] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const fmt = (x) => stdlib.formatCurrency(x, 4);

  const Shared = {
    hasRandom: () => Math.random(),
    checkBalance: async (token) => console.log(`Your non-network token balance is ${fmt(await stdlib.balanceOf(account, token))}`),
  }

  const Creator = {
    ...Shared,
  
    getNotifiedOfTransfer: async (address) => {
      setWhitelist((value) => [...value, address]);
      console.log('The address ', address, "was added to the whitelist");
    },
  };

  const submitWallet = async () => {
    setCurrentView(Views.LOADING);
    await new Promise((resolve) => {
      setWalletSubmissionPromise({resolver: () => resolve()});
    });
  } 

  const Attacher = {
    ...Shared,
  
    acceptToken: async (token) => {
      const tokenID = stdlib.bigNumberToNumber(token)
      await account.tokenAccept(tokenID)
    },
  
    submitWalletAddress: async () => {
      if (isComplete) return;

      setCurrentView(Views.SUBMIT_ADDRESS);
      await submitWallet();
      console.log('wallet submitted');
    },
  
    getPaymentStatus: (outcome) => {
      if(outcome){
        console.log('Successfully got added to whitelist. Will receive tokens shortly')
        setOutcome(true);
      }
      else{
        console.log('Your address wasnt added to whitelist')
        setOutcome(false);
      }

      setIsComplete(true);
      setCurrentView(Views.ERROR_OR_SUCCESS);
    },
  
    timeout: () => console.log('Time Out')
  
  };

  const connectAccount = async () => {
    try {
      const account = await stdlib.getDefaultAccount();
      setAccount(account);
      setCurrentView(Views.DEPLOYER_OR_ATTACHER);
    }
    catch (e) {
      setCurrentView(Views.CONNECTION_ERROR);
      console.log(e)
    }
  };

  const createContract = async () => {
    setCurrentView(Views.LOADING)
    const HBR = await stdlib.launchToken(account, "hebrewtoken", "HBR")
    const ctc =  account.contract(backend);
    backend.Creator(ctc, { ...Creator, getToken: () => HBR.id });
    console.log('Deploying contract...');

    const info = JSON.stringify(await ctc.getInfo(), null, 1) //fetch contract info
    console.log(info);
    setContractAddress(info);
    setCurrentView(Views.CONTRACT_CREATED);
  }

  const joinContract = async (contractInfo) => {
    try {
      setCurrentView(Views.LOADING)
      const ctc = await account.contract(backend, JSON.parse(contractInfo));
      backend.Attacher(ctc, Attacher);
      console.log('connecting')
    }
    catch (e) {
      alert('Please enter a valid contract address.')
    }
  }

  useEffect(() => {
    connectAccount();
  }, [])

  return (
    <div className="App">
      {
        currentView === Views.CONNECT_ACCOUNT && 
        <ConnectAccountView />
      }

      {
        currentView === Views.DEPLOYER_OR_ATTACHER &&
        <DeployerOrAttacherView  createContract={createContract} joinContract={() => setCurrentView(Views.ATTACH_TO_CONTRACT)}/>
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
        <ContractCreatedView addresses={whitelist} contractAddress={contractAddress}/>
      }

      {
        currentView === Views.ATTACH_TO_CONTRACT && 
        <AttachToContractView joinContract={joinContract}/>
      } 

      {
        currentView === Views.SUBMIT_ADDRESS &&
        <SubmitAddressView resolve={walletSubmissionPromise}/>
      }

      {
        currentView === Views.ERROR_OR_SUCCESS &&
        <ErrorOrSuccessView isSuccess={outcome}/>
      }

    </div>
  );
}

export default App;
