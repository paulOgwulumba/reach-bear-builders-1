import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Alice is deploying the contract...');
const ctcAlice = accAlice.contract(backend);
console.log("...");

console.log('Bob is attaching to the contract...');
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log("...")
console.log("Alice's address: ", accAlice.getAddress());
console.log("Alice's network token balance: ", stdlib.formatCurrency(await accAlice.balanceOf()));
console.log("...")
console.log("Bob's address: ", accBob.getAddress());
console.log("Bob's network token balance: ", stdlib.formatCurrency(await accAlice.balanceOf()));
console.log("...")


const displayWhiteListedAddress = (address) => {
  console.log("Retrieving the whitelisted address from the contract: ", address);
  console.log("...")
}

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    displayWhiteListedAddress,
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    displayWhiteListedAddress,
  }),
]);

console.log('Goodbye, Alice and Bob!');
