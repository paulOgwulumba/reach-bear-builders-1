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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const map0_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc1, ctc2, ctc2]
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
export async function Attacher(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v162], secs: v164, time: v163, didSend: v27, from: v161 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v174, time: v173, didSend: v34, from: v172 } = txn2;
  ;
  ;
  const v184 = stdlib.addressEq(v161, v172);
  stdlib.assert(v184, {
    at: './index.rsh:31:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher'
    });
  let v185 = stdlib.checkedBigNumberify('./index.rsh:34:30:decimal', stdlib.UInt_max, '0');
  let v186 = v173;
  
  while (await (async () => {
    
    return true;})()) {
    const v205 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:46:29:decimal', stdlib.UInt_max, '100'));
    const v207 = ctc.selfAddress();
    stdlib.protect(ctc0, await interact.submitWalletAddress(), {
      at: './index.rsh:40:35:application',
      fs: ['at ./index.rsh:39:18:application call to [unknown function] (defined at: ./index.rsh:39:22:function exp)'],
      msg: 'submitWalletAddress',
      who: 'Attacher'
      });
    stdlib.protect(ctc0, await interact.acceptToken(v162), {
      at: './index.rsh:41:27:application',
      fs: ['at ./index.rsh:39:18:application call to [unknown function] (defined at: ./index.rsh:39:22:function exp)'],
      msg: 'acceptToken',
      who: 'Attacher'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v162, v185, v205, v207],
      evt_cnt: 1,
      funcNum: 3,
      lct: v186,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:45:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v210], secs: v212, time: v211, didSend: v50, from: v209 } = txn3;
        
        ;
        const v214 = stdlib.lt(v185, stdlib.checkedBigNumberify('./index.rsh:55:27:decimal', stdlib.UInt_max, '2'));
        const v215 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v210), null);
        let v216;
        switch (v215[0]) {
          case 'None': {
            const v217 = v215[1];
            v216 = false;
            
            break;
            }
          case 'Some': {
            const v218 = v215[1];
            v216 = true;
            
            break;
            }
          }
        const v219 = v216 ? false : true;
        const v220 = v214 ? v219 : false;
        if (v220) {
          await stdlib.simMapSet(sim_r, 0, v210, null);
          sim_r.txns.push({
            kind: 'from',
            to: v210,
            tok: v162
            });
          
          
          
          const v238 = stdlib.add(v185, stdlib.checkedBigNumberify('./index.rsh:62:52:decimal', stdlib.UInt_max, '1'));
          const cv185 = v238;
          const cv186 = v211;
          
          await (async () => {
            const v185 = cv185;
            const v186 = cv186;
            
            if (await (async () => {
              
              return true;})()) {
              const v205 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:46:29:decimal', stdlib.UInt_max, '100'));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v162
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        else {
          
          const cv185 = v185;
          const cv186 = v211;
          
          await (async () => {
            const v185 = cv185;
            const v186 = cv186;
            
            if (await (async () => {
              
              return true;})()) {
              const v205 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:46:29:decimal', stdlib.UInt_max, '100'));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v162
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v205],
      tys: [ctc2, ctc4, ctc4, ctc3],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v162, v185, v205],
        evt_cnt: 0,
        funcNum: 4,
        lct: v186,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v242, time: v241, didSend: v105, from: v240 } = txn4;
          
          ;
          
          const cv185 = v185;
          const cv186 = v241;
          
          await (async () => {
            const v185 = cv185;
            const v186 = cv186;
            
            if (await (async () => {
              
              return true;})()) {
              const v205 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:46:29:decimal', stdlib.UInt_max, '100'));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v162
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc4, ctc4],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v242, time: v241, didSend: v105, from: v240 } = txn4;
      ;
      stdlib.protect(ctc0, await interact.timeout(), {
        at: './index.rsh:48:34:application',
        fs: ['at ./index.rsh:48:34:application call to [unknown function] (defined at: ./index.rsh:48:34:function exp)', 'at ./index.rsh:48:34:application call to "liftedInteract" (defined at: ./index.rsh:48:34:application)'],
        msg: 'timeout',
        who: 'Attacher'
        });
      
      const cv185 = v185;
      const cv186 = v241;
      
      v185 = cv185;
      v186 = cv186;
      
      continue;
      }
    else {
      const {data: [v210], secs: v212, time: v211, didSend: v50, from: v209 } = txn3;
      ;
      const v213 = stdlib.addressEq(v209, v210);
      stdlib.assert(v213, {
        at: './index.rsh:53:12:application',
        fs: [],
        msg: null,
        who: 'Attacher'
        });
      const v214 = stdlib.lt(v185, stdlib.checkedBigNumberify('./index.rsh:55:27:decimal', stdlib.UInt_max, '2'));
      const v215 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v210), null);
      let v216;
      switch (v215[0]) {
        case 'None': {
          const v217 = v215[1];
          v216 = false;
          
          break;
          }
        case 'Some': {
          const v218 = v215[1];
          v216 = true;
          
          break;
          }
        }
      const v219 = v216 ? false : true;
      const v220 = v214 ? v219 : false;
      if (v220) {
        await stdlib.mapSet(map0, v210, null);
        ;
        stdlib.protect(ctc0, await interact.checkBalance(v162), {
          at: './index.rsh:59:37:application',
          fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:37:function exp)', 'at ./index.rsh:59:37:application call to "liftedInteract" (defined at: ./index.rsh:59:37:application)'],
          msg: 'checkBalance',
          who: 'Attacher'
          });
        
        stdlib.protect(ctc0, await interact.getPaymentStatus(true), {
          at: './index.rsh:60:41:application',
          fs: ['at ./index.rsh:60:41:application call to [unknown function] (defined at: ./index.rsh:60:41:function exp)', 'at ./index.rsh:60:41:application call to "liftedInteract" (defined at: ./index.rsh:60:41:application)'],
          msg: 'getPaymentStatus',
          who: 'Attacher'
          });
        
        stdlib.protect(ctc0, await interact.checkBalance(v162), {
          at: './index.rsh:61:37:application',
          fs: ['at ./index.rsh:61:37:application call to [unknown function] (defined at: ./index.rsh:61:37:function exp)', 'at ./index.rsh:61:37:application call to "liftedInteract" (defined at: ./index.rsh:61:37:application)'],
          msg: 'checkBalance',
          who: 'Attacher'
          });
        
        const v238 = stdlib.add(v185, stdlib.checkedBigNumberify('./index.rsh:62:52:decimal', stdlib.UInt_max, '1'));
        const cv185 = v238;
        const cv186 = v211;
        
        v185 = cv185;
        v186 = cv186;
        
        continue;}
      else {
        stdlib.protect(ctc0, await interact.getPaymentStatus(false), {
          at: './index.rsh:66:41:application',
          fs: ['at ./index.rsh:66:41:application call to [unknown function] (defined at: ./index.rsh:66:41:function exp)', 'at ./index.rsh:66:41:application call to "liftedInteract" (defined at: ./index.rsh:66:41:application)'],
          msg: 'getPaymentStatus',
          who: 'Attacher'
          });
        
        const cv185 = v185;
        const cv186 = v211;
        
        v185 = cv185;
        v186 = cv186;
        
        continue;}}
    
    }
  return;
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v160 = stdlib.protect(ctc2, await interact.getToken(), {
    at: './index.rsh:26:47:application',
    fs: ['at ./index.rsh:25:15:application call to [unknown function] (defined at: ./index.rsh:25:19:function exp)'],
    msg: 'getToken',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v160],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v162], secs: v164, time: v163, didSend: v27, from: v161 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v162
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v162], secs: v164, time: v163, didSend: v27, from: v161 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v161, v162],
    evt_cnt: 0,
    funcNum: 1,
    lct: v163,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:31:17:decimal', stdlib.UInt_max, '500000000'), v162]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v174, time: v173, didSend: v34, from: v172 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:31:17:decimal', stdlib.UInt_max, '500000000'),
        kind: 'to',
        tok: v162
        });
      const v185 = stdlib.checkedBigNumberify('./index.rsh:34:30:decimal', stdlib.UInt_max, '0');
      const v186 = v173;
      
      if (await (async () => {
        
        return true;})()) {
        const v205 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:46:29:decimal', stdlib.UInt_max, '100'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v162
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v174, time: v173, didSend: v34, from: v172 } = txn2;
  ;
  ;
  const v184 = stdlib.addressEq(v161, v172);
  stdlib.assert(v184, {
    at: './index.rsh:31:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v185 = stdlib.checkedBigNumberify('./index.rsh:34:30:decimal', stdlib.UInt_max, '0');
  let v186 = v173;
  
  while (await (async () => {
    
    return true;})()) {
    const v205 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:46:29:decimal', stdlib.UInt_max, '100'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['time', v205],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v242, time: v241, didSend: v105, from: v240 } = txn4;
      ;
      const cv185 = v185;
      const cv186 = v241;
      
      v185 = cv185;
      v186 = cv186;
      
      continue;
      }
    else {
      const {data: [v210], secs: v212, time: v211, didSend: v50, from: v209 } = txn3;
      ;
      const v213 = stdlib.addressEq(v209, v210);
      stdlib.assert(v213, {
        at: './index.rsh:53:12:application',
        fs: [],
        msg: null,
        who: 'Creator'
        });
      const v214 = stdlib.lt(v185, stdlib.checkedBigNumberify('./index.rsh:55:27:decimal', stdlib.UInt_max, '2'));
      const v215 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v210), null);
      let v216;
      switch (v215[0]) {
        case 'None': {
          const v217 = v215[1];
          v216 = false;
          
          break;
          }
        case 'Some': {
          const v218 = v215[1];
          v216 = true;
          
          break;
          }
        }
      const v219 = v216 ? false : true;
      const v220 = v214 ? v219 : false;
      if (v220) {
        await stdlib.mapSet(map0, v210, null);
        ;
        stdlib.protect(ctc0, await interact.getNotifiedOfTransfer(v210), {
          at: './index.rsh:58:45:application',
          fs: ['at ./index.rsh:58:45:application call to [unknown function] (defined at: ./index.rsh:58:45:function exp)', 'at ./index.rsh:58:45:application call to "liftedInteract" (defined at: ./index.rsh:58:45:application)'],
          msg: 'getNotifiedOfTransfer',
          who: 'Creator'
          });
        
        const v238 = stdlib.add(v185, stdlib.checkedBigNumberify('./index.rsh:62:52:decimal', stdlib.UInt_max, '1'));
        const cv185 = v238;
        const cv186 = v211;
        
        v185 = cv185;
        v186 = cv186;
        
        continue;}
      else {
        const cv185 = v185;
        const cv186 = v211;
        
        v185 = cv185;
        v186 = cv186;
        
        continue;}}
    
    }
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAEECBACoI0GJgIBAAAiNQAxGEECIilkSSJbNQElWzUCMRkjEkEACDEAKChmQgHxNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBAwxAAM5JJAxAADQkEkQkNAESRDQESSISTDQCEhFEKGQ1A4AEkSc087AyBjQDIQRbD0Q0AyJbNAMlWzIGQgExSCQ0ARJENARJIhJMNAISEUQoZEk1A0kiWzX/JVs1/kk1BTX9gARUhwzYNP1QsDIGNAMhBFsMRDEANP0SRDT9iAGHSTX7IlVAAAYiNfxCAAYjNfxCAAA0/iEFDDT8FBBBACk0/SiAAQFmsSKyAYGAhK9fshIkshA0/bIUNP+yEbM0/zT+IwgyBkIApjT/NP4yBkIAnUkjDEAAQCMSRCM0ARJENARJIhJMNAISEUQoZEk1A4EgWzX/gASai5F0sIGAyrXuATT/iAElNANXACAxABJENP8iMgZCAFdIIQaIAPYiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAhBogA0LEisgEishIkshAyCrIUNP+yEbMxADT/FlAoSwFXAChnSCM1ATIGNQJCAEY1/zX+Nf00/4FkCDX8NP0WNP4WUDT8FlAoSwFXABhnSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQUxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 40,
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v162",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v162",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v210",
                "type": "address"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v210",
                "type": "address"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620012ce380380620012ce8339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b610ff180620002dd6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100db57806398de9fae146100f0578063a7661d5414610103578063ab53f2c61461011657005b80631e93b0f1146100775780632c10a1591461009b5780633bc5b7bf146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610cb5565b610139565b3480156100ba57600080fd5b506100ce6100c9366004610ce9565b6102bb565b6040516100929190610d1c565b3480156100e757600080fd5b50600154610088565b6100756100fe366004610cb5565b6102e7565b610075610111366004610cb5565b610616565b34801561012257600080fd5b5061012b610772565b604051610092929190610d8f565b610149600160005414600b61080f565b6101638135158061015c57506001548235145b600c61080f565b60008080556002805461017590610dc9565b80601f01602080910402602001604051908101604052809291908181526020018280546101a190610dc9565b80156101ee5780601f106101c3576101008083540402835291602001916101ee565b820191906000526020600020905b8154815290600101906020018083116101d157829003601f168201915b50505050508060200190518101906102069190610dfe565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610239929190610e79565b60405180910390a161024d3415600861080f565b61026a610263338360200151631dcd6500610839565b600961080f565b8051610282906001600160a01b03163314600a61080f565b61028a610bc8565b60208083015182516001600160a01b03909116905281810180516000905251439101526102b681610851565b505050565b60408051606081018252600080825260208201819052918101919091526102e1826108f6565b92915050565b6102f7600460005414600f61080f565b6103118135158061030a57506001548235145b601061080f565b60008080556002805461032390610dc9565b80601f016020809104026020016040519081016040528092919081815260200182805461034f90610dc9565b801561039c5780601f106103715761010080835404028352916020019161039c565b820191906000526020600020905b81548152906001019060200180831161037f57829003601f168201915b50505050508060200190518101906103b49190610eb1565b6040805160208101909152600081529091506103d782604001514310601161080f565b7fee3bc1f4d4c499b854813d79a19675a1ad29af723ef5be60c1811a34d14139783384604051610408929190610f21565b60405180910390a161041c3415600d61080f565b61044a61042f6040850160208601610ce9565b6001600160a01b0316336001600160a01b031614600e61080f565b600061046461045f6040860160208701610ce9565b6108f6565b51600181111561047657610476610d06565b141561048557600081526104b7565b600161049a61045f6040860160208701610ce9565b5160018111156104ac576104ac610d06565b14156104b757600181525b60028260200151106104ca5760006104da565b80516104d75760016104da565b60005b156105e0576001600460006104f56040870160208801610ce9565b6001600160a01b031681526020810191909152604001600020805460ff19166001838181111561052757610527610d06565b021790555060006004816105416040870160208801610ce9565b6001600160a01b0316815260208082019290925260409081016000208054931515620100000262ff00001990941693909317909255835161059692909161058c918701908701610ce9565b630bebc2006109ce565b61059e610bc8565b825181516001600160a01b03909116905260208301516105c090600190610f5c565b60208083018051929092529051439101526105da81610851565b50505050565b6105e8610bc8565b825181516001600160a01b03909116905260208084015181830180519190915251439101526105da81610851565b610626600460005414601361080f565b6106408135158061063957506001548235145b601461080f565b60008080556002805461065290610dc9565b80601f016020809104026020016040519081016040528092919081815260200182805461067e90610dc9565b80156106cb5780601f106106a0576101008083540402835291602001916106cb565b820191906000526020600020905b8154815290600101906020018083116106ae57829003601f168201915b50505050508060200190518101906106e39190610eb1565b90506106f78160400151431015601561080f565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610728929190610e79565b60405180910390a161073c3415601261080f565b610744610bc8565b815181516001600160a01b03909116905260208083015181830180519190915251439101526102b681610851565b60006060600054600280805461078790610dc9565b80601f01602080910402602001604051908101604052809291908181526020018280546107b390610dc9565b80156108005780601f106107d557610100808354040283529160200191610800565b820191906000526020600020905b8154815290600101906020018083116107e357829003601f168201915b50505050509050915091509091565b816108355760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000610847838530856109e2565b90505b9392505050565b60408051602081019091526000815260648260200151602001516108759190610f5c565b81526040805160608082018352600080835260208084018281528486018381528851516001600160a01b031680875289840151518352885182526004909455436001558651928301939093525194810194909452519083015290608001604051602081830303815290604052600290805190602001906105da929190610c04565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561094257610942610d06565b14156109bf576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561098357610983610d06565b600181111561099457610994610d06565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b6109d9838383610abc565b6102b657600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610a4991610f82565b60006040518083038185875af1925050503d8060008114610a86576040519150601f19603f3d011682016040523d82523d6000602084013e610a8b565b606091505b5091509150610a9c82826001610b8d565b5080806020019051810190610ab19190610f9e565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610b1b91610f82565b60006040518083038185875af1925050503d8060008114610b58576040519150601f19603f3d011682016040523d82523d6000602084013e610b5d565b606091505b5091509150610b6e82826002610b8d565b5080806020019051810190610b839190610f9e565b9695505050505050565b60608315610b9c57508161084a565b825115610bac5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161082c565b6040805160608101825260009181019182529081908152602001610bff604051806040016040528060008152602001600081525090565b905290565b828054610c1090610dc9565b90600052602060002090601f016020900481019282610c325760008555610c78565b82601f10610c4b57805160ff1916838001178555610c78565b82800160010185558215610c78579182015b82811115610c78578251825591602001919060010190610c5d565b50610c84929150610c88565b5090565b5b80821115610c845760008155600101610c89565b600060408284031215610caf57600080fd5b50919050565b600060408284031215610cc757600080fd5b61084a8383610c9d565b6001600160a01b0381168114610ce657600080fd5b50565b600060208284031215610cfb57600080fd5b813561084a81610cd1565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610d4157634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60005b83811015610d7e578181015183820152602001610d66565b838111156105da5750506000910152565b8281526040602082015260008251806040840152610db4816060850160208701610d63565b601f01601f1916919091016060019392505050565b600181811c90821680610ddd57607f821691505b60208210811415610caf57634e487b7160e01b600052602260045260246000fd5b600060408284031215610e1057600080fd5b6040516040810181811067ffffffffffffffff82111715610e4157634e487b7160e01b600052604160045260246000fd5b6040528251610e4f81610cd1565b81526020830151610e5f81610cd1565b60208201529392505050565b8015158114610ce657600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610ea181610e6b565b8015156040840152509392505050565b600060608284031215610ec357600080fd5b6040516060810181811067ffffffffffffffff82111715610ef457634e487b7160e01b600052604160045260246000fd5b6040528251610f0281610cd1565b8152602083810151908201526040928301519281019290925250919050565b6001600160a01b0383811682528235602080840191909152606083019190840135610f4b81610cd1565b818116604085015250509392505050565b60008219821115610f7d57634e487b7160e01b600052601160045260246000fd5b500190565b60008251610f94818460208701610d63565b9190910192915050565b600060208284031215610fb057600080fd5b815161084a81610e6b56fea2646970667358221220de475b0b903c49706fd164bb1b2b23460595a5ebbb4dc3b6c798a06563f04ed564736f6c634300080c0033`,
  BytecodeLen: 4814,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:75:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:37:13:after expr stmt semicolon',
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
  "Attacher": Attacher,
  "Creator": Creator
  };
export const _APIs = {
  };
