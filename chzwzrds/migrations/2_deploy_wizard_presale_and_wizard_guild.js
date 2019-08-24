/* global artifacts */
const WizardPresale = artifacts.require('WizardPresale');
const WizardGuild = artifacts.require('WizardGuild');
const {
  STARTING_COST,
  COST_INCREMEMENT,
  EXCLUSIVE_COUNT,
  SALE_DURATION,
} = require('../utils/constants');

module.exports = async (deployer, _network, accounts) => {
  const startBlock = (await web3.eth.getBlock('latest')).number + 2;

  await deployer.deploy(
    WizardPresale,
    STARTING_COST,
    COST_INCREMEMENT,
    EXCLUSIVE_COUNT,
    startBlock,
    SALE_DURATION,
  );

  const cooAddress = accounts[2];
  await deployer.deploy(WizardGuild, cooAddress);
};
