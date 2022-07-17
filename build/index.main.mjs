// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const map0_ctc = ctc2;
  
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:15:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:15:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v51, time: v50, didSend: v22, from: v49 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v51, time: v50, didSend: v22, from: v49 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v54, time: v53, didSend: v26, from: v52 } = txn2;
  ;
  await stdlib.mapSet(map0, v52, v52);
  const v59 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v52), null);
  stdlib.protect(ctc0, await interact.displayWhiteListedAddress(v59), {
    at: './index.rsh:27:39:application',
    fs: ['at ./index.rsh:26:7:application call to [unknown function] (defined at: ./index.rsh:26:18:function exp)'],
    msg: 'displayWhiteListedAddress',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v51, time: v50, didSend: v22, from: v49 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 1,
    lct: v50,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:19:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v54, time: v53, didSend: v26, from: v52 } = txn2;
      
      ;
      await stdlib.simMapSet(sim_r, 0, v52, v52);
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v54, time: v53, didSend: v26, from: v52 } = txn2;
  ;
  await stdlib.mapSet(map0, v52, v52);
  const v64 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v52), null);
  stdlib.protect(ctc0, await interact.displayWhiteListedAddress(v64), {
    at: './index.rsh:27:39:application',
    fs: ['at ./index.rsh:26:7:application call to [unknown function] (defined at: ./index.rsh:26:18:function exp)'],
    msg: 'displayWhiteListedAddress',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAgABACI1ADEYQQDfKGRJIls1AYEIWzUCMRkjEkEACjEAKYEhr2ZCAKs2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAAnIxJEIzQBEkQ0BEkiEkw0AhIRRIAEmouRdLAxACmAAQExAFBmQgApSIGgjQaIAI4iNAESRDQESSISTDQCEhFEgARfDav6sCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIzE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 33,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161086e38038061086e8339810160408190526100229161017d565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007d341560076100bb565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100b39260029201906100e4565b505050610220565b816100e05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f0906101e5565b90600052602060002090601f0160209004810192826101125760008555610158565b82601f1061012b57805160ff1916838001178555610158565b82800160010185558215610158579182015b8281111561015857825182559160200191906001019061013d565b50610164929150610168565b5090565b5b808211156101645760008155600101610169565b60006040828403121561018f57600080fd5b604080519081016001600160401b03811182821017156101bf57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101d957600080fd5b60208201529392505050565b600181811c908216806101f957607f821691505b6020821081141561021a57634e487b7160e01b600052602260045260246000fd5b50919050565b61063f8061022f6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a159146100785780633bc5b7bf1461008b57806383230757146100b8578063ab53f2c6146100cd57005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610469565b6100f0565b34801561009757600080fd5b506100ab6100a6366004610481565b61024a565b60405161006f91906104c7565b3480156100c457600080fd5b50600154610065565b3480156100d957600080fd5b506100e2610276565b60405161006f929190610514565b6101006001600054146009610313565b61011a8135158061011357506001548235145b600a610313565b60008080556002805461012c90610571565b80601f016020809104026020016040519081016040528092919081815260200182805461015890610571565b80156101a55780601f1061017a576101008083540402835291602001916101a5565b820191906000526020600020905b81548152906001019060200180831161018857829003601f168201915b50505050508060200190518101906101bd91906105b4565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f09291906105d1565b60405180910390a161020434156008610313565b3360008181526004602052604081208054600161ff01600160b01b03199091166201000090940293909317831790558080559081905561024690600290610413565b5050565b604080516060810182526000808252602082018190529181019190915261027082610338565b92915050565b60006060600054600280805461028b90610571565b80601f01602080910402602001604051908101604052809291908181526020018280546102b790610571565b80156103045780601f106102d957610100808354040283529160200191610304565b820191906000526020600020905b8154815290600101906020018083116102e757829003601f168201915b50505050509050915091509091565b816102465760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610384576103846104b1565b1415610404576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156103c5576103c56104b1565b60018111156103d6576103d66104b1565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b60008082526020820152919050565b50805461041f90610571565b6000825580601f1061042f575050565b601f01602090049060005260206000209081019061044d9190610450565b50565b5b808211156104655760008155600101610451565b5090565b60006040828403121561047b57600080fd5b50919050565b60006020828403121561049357600080fd5b81356001600160a01b03811681146104aa57600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106104ec57634e487b7160e01b600052602160045260246000fd5b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b82815260006020604081840152835180604085015260005b818110156105485785810183015185820160600152820161052c565b8181111561055a576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061058557607f821691505b6020821081141561047b57634e487b7160e01b600052602260045260246000fd5b801515811461044d57600080fd5b6000602082840312156105c657600080fd5b81516104aa816105a6565b6001600160a01b0383168152813560208083019190915260608201908301356105f9816105a6565b801515604084015250939250505056fea26469706673582212207f5a2fa30e6fe8539c4c962db6044debc6838d2b75a8a4dc822529c6a0f9e1e664736f6c634300080c0033`,
  BytecodeLen: 2158,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:16:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
