import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accIsaac, accJacob, accEsau ] =
  await stdlib.newTestAccounts(3, startingBalance);
console.log('Hello, Isaac, Jacob and Esau!');
console.log("...");

console.log('Isaac is creating the non-network token');
const HebrewToken = await stdlib.launchToken(accIsaac, 'hebrewtoken', 'HBT', {
  decimals: 6,
  supply: stdlib.parseCurrency(1000),
});
console.log('Token created successfully');
console.log("...");

console.log("Token details");
// console.log(HebrewToken);
console.log('Name: ', HebrewToken.name);
console.log('Symbol: ', HebrewToken.sym);
console.log('ID: ', stdlib.formatCurrency(HebrewToken.id));
console.log("...");

console.log('Jacob and Esau are accepting the new token');
await accJacob.tokenAccept(HebrewToken.id);
await accEsau.tokenAccept(HebrewToken.id);
console.log("...");

console.log('Isaac is deploying the contract...');
const ctcIsaac = accIsaac.contract(backend);
console.log("...");

console.log('Jacob is attaching to the contract...');
const ctcJacob = accJacob.contract(backend, ctcIsaac.getInfo());

console.log('Esau is attaching to the contract...');
const ctcEsau = accEsau.contract(backend, ctcIsaac.getInfo());

console.log("...")
console.log("Jacob's address: ", accJacob.getAddress());
console.log("Jacob's network token balance: ", stdlib.formatCurrency(await accEsau.balanceOf()));
console.log("...")
console.log("Esau's address: ", accEsau.getAddress());
console.log("Esau's network token balance: ", stdlib.formatCurrency(await accEsau.balanceOf()));
console.log("...")

const getAccountFromAddress = (address) => {
  if (address === accJacob.getAddress()) {
    return accJacob
  }
  else if (address === accEsau.getAddress()) { 
    return accEsau
  }
  else {
    return accIsaac
  } 
}

const transferTokenToAddressIfValid = async (address, isValid) => {
  console.log(isValid);
  if (isValid) {
    console.log('Transferring tokens to the address', address, "because it is whitelisted");
    console.log('Balance of address before transfer: ', stdlib.formatCurrency(await stdlib.balanceOf(getAccountFromAddress(address), HebrewToken.id)));
    console.log('Making the transfer...');
    await HebrewToken.mint(getAccountFromAddress(address), stdlib.parseCurrency(50));
    console.log('Transfer complete');
    console.log('Balance of address after transfer: ', stdlib.formatCurrency(await stdlib.balanceOf(getAccountFromAddress(address), HebrewToken.id)));
    console.log('...');
  }
  else {
    console.log('Cannot transfer tokens to the address', address, "because it is not whitelisted");
  }
}

console.log('Starting the backends...');
await Promise.all([
  backend.Isaac(ctcIsaac, {
    ...stdlib.hasRandom,
    transferTokenToAddressIfValid,
  }),
  backend.Jacob(ctcJacob, {
    ...stdlib.hasRandom,
  }),
  backend.Esau(ctcEsau, {
    ...stdlib.hasRandom,
  }),
]);

console.log('Goodbye, Isaac, Esau and Jacob!');
