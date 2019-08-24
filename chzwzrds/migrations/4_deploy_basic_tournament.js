/* global artifacts */
const WizardGuild = artifacts.require('WizardGuild');
const InauguralGateKeeper = artifacts.require('InauguralGateKeeper');
const BasicTournament = artifacts.require('BasicTournament');
const ThreeAffinityDuelResolver = artifacts.require(
  'ThreeAffinityDuelResolver',
);
const {
  POWER_SCALE,
  ADMISSION_DURATION,
  REVIVAL_DURATION,
  ASCENSION_DURATION,
  FIGHT_DURATION,
  CULLING_DURATION,
  BLUE_MOLD_BASE_POWER,
  SESSIONS_BETWEEN_MOLD_DOUBLIN,
  DUEL_TIMEOUT_DURATION,
} = require('../utils/constants');

module.exports = async (deployer, _network, accounts) => {
  const duelResolver = ThreeAffinityDuelResolver.address;
  const coo = accounts[2];
  const tournamentStartBlock = (await web3.eth.getBlock('latest')).number + 2;

  await deployer.deploy(
    BasicTournament,
    coo,
    duelResolver,
    POWER_SCALE,
    tournamentStartBlock,
    ADMISSION_DURATION,
    REVIVAL_DURATION,
    ASCENSION_DURATION,
    FIGHT_DURATION,
    CULLING_DURATION,
    BLUE_MOLD_BASE_POWER,
    SESSIONS_BETWEEN_MOLD_DOUBLIN,
    DUEL_TIMEOUT_DURATION,
  );

  // IMP: CW doesn't have set methods
  // const basicTournament = await BasicTournament.deployed();
  // await basicTournament.setWizardGuild(WizardGuild.address, { from: coo });
  // await basicTournament.setGateKeeper(InauguralGateKeeper.address, {
  //   from: coo,
  // });
};
