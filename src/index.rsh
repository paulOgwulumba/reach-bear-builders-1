'reach 0.1';

const shared = {
  ...hasRandom,
  checkBalance: Fun([Token], Null)
}
export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const Creator =  Participant('Creator', {
    ...shared,
    getToken: Fun([], Token),
    getNotifiedOfTransfer: Fun([Address], Null),
  });
  const Attacher = ParticipantClass('Attacher', {
    ...shared,
    submitWalletAddress: Fun([], Null),
    getPaymentStatus: Fun([Bool], Null),
    acceptToken: Fun([Token], Null),
    timeout: Fun([], Null),
    checkBalance: Fun([Token], Null),
  });

  init();

  Creator.only(() => {
    const token = declassify(interact.getToken());
  })
  Creator.publish(token)
  commit();

  Creator.pay([[500000000, token]]);
  const WHITELIST = new Set();
  
  var [numberWhitelisted] = [0];
  invariant(balance(token) === (500000000 - (numberWhitelisted * 200000000)) );
  while(true){
    commit();

    Attacher.only(() => {
      interact.submitWalletAddress();
      interact.acceptToken(token);
      const attacherAddress = this;
    });

    Attacher.publish(attacherAddress)
      .timeout(relativeTime(100), () => {
        Attacher.publish();
        Attacher.interact.timeout();
        [ numberWhitelisted ] = [ numberWhitelisted ];
        continue;
      });

    require(this === attacherAddress);

    if((numberWhitelisted<5) && (!WHITELIST.member(attacherAddress)) ){
      WHITELIST.insert(attacherAddress);
      transfer(200000000, token).to(attacherAddress);
      Creator.interact.getNotifiedOfTransfer(attacherAddress);
      Attacher.interact.checkBalance(token);
      Attacher.interact.getPaymentStatus(true);
      Attacher.interact.checkBalance(token);
      [ numberWhitelisted ] = [numberWhitelisted + 1];
      continue;
    }
    else{
      Attacher.interact.getPaymentStatus(false);
      [ numberWhitelisted ] = [ numberWhitelisted ]
      continue;
    }

    
  }

  assert(balance(token) == 0);
  commit();
})