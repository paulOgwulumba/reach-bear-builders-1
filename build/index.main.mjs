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
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const map0_ctc = ctc1;
  
  
  return {
    infos: {
      },
    views: {
      1: [],
      2: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Esau(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Esau expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Esau expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  
  const map0_ctc = ctc1;
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
  const {data: [], secs: v64, time: v63, didSend: v22, from: v62 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v67, time: v66, didSend: v26, from: v65 } = txn2;
  ;
  await stdlib.mapSet(map0, v65, null);
  const txn3 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 2,
    lct: v66,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v71, time: v70, didSend: v32, from: v69 } = txn3;
      
      ;
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
  const {data: [], secs: v71, time: v70, didSend: v32, from: v69 } = txn3;
  ;
  return;
  
  
  
  
  
  
  };
export async function Isaac(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Isaac expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Isaac expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  
  const map0_ctc = ctc1;
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
    lct: stdlib.checkedBigNumberify('./index.rsh:17:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:17:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v64, time: v63, didSend: v22, from: v62 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v64, time: v63, didSend: v22, from: v62 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v67, time: v66, didSend: v26, from: v65 } = txn2;
  ;
  await stdlib.mapSet(map0, v65, null);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v71, time: v70, didSend: v32, from: v69 } = txn3;
  ;
  const v76 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v69), null);
  let v77;
  switch (v76[0]) {
    case 'None': {
      const v78 = v76[1];
      v77 = false;
      
      break;
      }
    case 'Some': {
      const v79 = v76[1];
      v77 = true;
      
      break;
      }
    }
  stdlib.protect(ctc0, await interact.transferTokenToAddressIfValid(v69, v77), {
    at: './index.rsh:31:43:application',
    fs: ['at ./index.rsh:30:13:application call to [unknown function] (defined at: ./index.rsh:30:17:function exp)'],
    msg: 'transferTokenToAddressIfValid',
    who: 'Isaac'
    });
  const v80 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v65), null);
  let v81;
  switch (v80[0]) {
    case 'None': {
      const v82 = v80[1];
      v81 = false;
      
      break;
      }
    case 'Some': {
      const v83 = v80[1];
      v81 = true;
      
      break;
      }
    }
  stdlib.protect(ctc0, await interact.transferTokenToAddressIfValid(v65, v81), {
    at: './index.rsh:32:43:application',
    fs: ['at ./index.rsh:30:13:application call to [unknown function] (defined at: ./index.rsh:30:17:function exp)'],
    msg: 'transferTokenToAddressIfValid',
    who: 'Isaac'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Jacob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Jacob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Jacob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  
  const map0_ctc = ctc1;
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
  const {data: [], secs: v64, time: v63, didSend: v22, from: v62 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 1,
    lct: v63,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v67, time: v66, didSend: v26, from: v65 } = txn2;
      
      ;
      await stdlib.simMapSet(sim_r, 0, v65, null);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v67, time: v66, didSend: v26, from: v65 } = txn2;
  ;
  await stdlib.mapSet(map0, v65, null);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v71, time: v70, didSend: v32, from: v69 } = txn3;
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAECJgIBAAAiNQAxGEEBAilkSSJbNQGBCFs1AjEZIxJBAAgxACgoZkIA0DYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAExJJAxAAB0kEkQkNAESRDQESSISTDQCEhFEgARBsUBNsEIAUkgjNAESRDQESSISTDQCEhFEgASai5F0sDEAKIABAWYkNQEyBjUCQgBFSIGgjQaIAI4iNAESRDQESSISTDQCEhFEgARfDav6sCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIzE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
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
    "name": "_reach_e2",
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a47380380610a478339810160408190526100229161017d565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007d341560076100bb565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100b39260029201906100e4565b505050610220565b816100e05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f0906101e5565b90600052602060002090601f0160209004810192826101125760008555610158565b82601f1061012b57805160ff1916838001178555610158565b82800160010185558215610158579182015b8281111561015857825182559160200191906001019061013d565b50610164929150610168565b5090565b5b808211156101645760008155600101610169565b60006040828403121561018f57600080fd5b604080519081016001600160401b03811182821017156101bf57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101d957600080fd5b60208201529392505050565b600181811c908216806101f957607f821691505b6020821081141561021a57634e487b7160e01b600052602260045260246000fd5b50919050565b6108188061022f6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780633bc5b7bf146100965780637eea518c146100c357806383230757146100d6578063ab53f2c6146100eb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610648565b61010e565b3480156100a257600080fd5b506100b66100b1366004610660565b61027e565b60405161007a91906106a6565b61005d6100d1366004610648565b6102aa565b3480156100e257600080fd5b50600154610070565b3480156100f757600080fd5b506101006103d8565b60405161007a9291906106ed565b61011e6001600054146009610475565b6101388135158061013157506001548235145b600a610475565b60008080556002805461014a9061074a565b80601f01602080910402602001604051908101604052809291908181526020018280546101769061074a565b80156101c35780601f10610198576101008083540402835291602001916101c3565b820191906000526020600020905b8154815290600101906020018083116101a657829003601f168201915b50505050508060200190518101906101db919061078d565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161020e9291906107aa565b60405180910390a161022234156008610475565b336000908152600460209081526040808320805462ff00ff191660019081179091556002845543905580519182018390520160405160208183030381529060405260029080519060200190610278929190610572565b50505050565b60408051606081018252600080825260208201819052918101919091526102a48261049a565b92915050565b6102ba600260005414600c610475565b6102d4813515806102cd57506001548235145b600d610475565b6000808055600280546102e69061074a565b80601f01602080910402602001604051908101604052809291908181526020018280546103129061074a565b801561035f5780601f106103345761010080835404028352916020019161035f565b820191906000526020600020905b81548152906001019060200180831161034257829003601f168201915b5050505050806020019051810190610377919061078d565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103aa9291906107aa565b60405180910390a16103be3415600b610475565b600080805560018190556103d4906002906105f6565b5050565b6000606060005460028080546103ed9061074a565b80601f01602080910402602001604051908101604052809291908181526020018280546104199061074a565b80156104665780601f1061043b57610100808354040283529160200191610466565b820191906000526020600020905b81548152906001019060200180831161044957829003601f168201915b50505050509050915091509091565b816103d45760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156104e6576104e6610690565b1415610563576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561052757610527610690565b600181111561053857610538610690565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b82805461057e9061074a565b90600052602060002090601f0160209004810192826105a057600085556105e6565b82601f106105b957805160ff19168380011785556105e6565b828001600101855582156105e6579182015b828111156105e65782518255916020019190600101906105cb565b506105f2929150610633565b5090565b5080546106029061074a565b6000825580601f10610612575050565b601f0160209004906000526020600020908101906106309190610633565b50565b5b808211156105f25760008155600101610634565b60006040828403121561065a57600080fd5b50919050565b60006020828403121561067257600080fd5b81356001600160a01b038116811461068957600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106106cb57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b8181101561072157858101830151858201606001528201610705565b81811115610733576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061075e57607f821691505b6020821081141561065a57634e487b7160e01b600052602260045260246000fd5b801515811461063057600080fd5b60006020828403121561079f57600080fd5b81516106898161077f565b6001600160a01b0383168152813560208083019190915260608201908301356107d28161077f565b801515604084015250939250505056fea26469706673582212200bff030f831ad93c17c584aed75eb0d6baf133441b89a369e664e39526a3373864736f6c634300080c0033`,
  BytecodeLen: 2631,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:18:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:28:11:after expr stmt semicolon',
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
  "Esau": Esau,
  "Isaac": Isaac,
  "Jacob": Jacob
  };
export const _APIs = {
  };
