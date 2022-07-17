'reach 0.1';

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const A = Participant('Alice', {
    displayWhiteListedAddress: Fun([Data({"None": Null, "Some": Address})], Null)
  });
  const B = Participant('Bob', {
    displayWhiteListedAddress: Fun([Data({"None": Null, "Some": Address})], Null)
  });
  init();

  // The first one to publish deploys the contract
  A.publish();
  commit();
  
  // The second one to publish always attaches
  B.publish();

  const addressMap = new Map(Address, Address);
  addressMap[this] = B;

  commit();

  each([A, B],() => {
    interact.displayWhiteListedAddress(addressMap[B]);
  });

  exit();
});
