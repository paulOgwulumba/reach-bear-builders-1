'reach 0.1';

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const Isaac = Participant('Isaac', {
    transferTokenToAddressIfValid: Fun([Address, Bool], Null)
  });

  const Jacob = Participant('Jacob', {});

  const Esau = Participant('Esau', {});

  init();

  // The first one to publish deploys the contract
  Isaac.publish();
  commit();
  
  // The second one to publish attaches and gets whitelisted
  Jacob.publish();
  const WhitelistedAddressMap = new Set();
  WhitelistedAddressMap.insert(Jacob);
  commit();

  // The third one to publish attaches but does not get whitelisted
  Esau.publish();
  commit();

  Isaac.only(() => {
    interact.transferTokenToAddressIfValid(Esau, WhitelistedAddressMap.member(Esau));
    interact.transferTokenToAddressIfValid(Jacob, WhitelistedAddressMap.member(Jacob));
  });

  exit();
});
