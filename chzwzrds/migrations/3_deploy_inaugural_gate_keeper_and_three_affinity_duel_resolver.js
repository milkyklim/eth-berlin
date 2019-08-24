/* global artifacts */
const InauguralGateKeeper = artifacts.require('InauguralGateKeeper');
const ThreeAffinityDuelResolver = artifacts.require(
  'ThreeAffinityDuelResolver',
);
const {
  NEUTRAL_WIZARD_COST,
  ELEMENTAL_WIZARD_COST,
  ELEMENTAL_WIZARD_INCREMENT,
} = require('../utils/constants');

module.exports = async (deployer, _network, accounts) => {
  const cfo = accounts[1];
  const coo = accounts[2];

  await deployer.deploy(
    InauguralGateKeeper,
    coo,
    cfo,
    NEUTRAL_WIZARD_COST,
    ELEMENTAL_WIZARD_COST,
    ELEMENTAL_WIZARD_INCREMENT,
  );

  // IMP: CW doesn't have set methods
  // const inauguralGateKeeper = await InauguralGateKeeper.deployed();
  // await inauguralGateKeeper.setWizardGuild(WizardGuild.address, { from: coo });
  // await inauguralGateKeeper.setWizardPresale(WizardPresale.address, {
  //   from: coo,
  // });

  await deployer.deploy(ThreeAffinityDuelResolver);
};
