/* global artifacts */
const WizardPresale = artifacts.require('WizardPresale');
const InauguralGateKeeper = artifacts.require('InauguralGateKeeper');
const WizardGuild = artifacts.require('WizardGuild');
const BasicTournament = artifacts.require('BasicTournament');

module.exports = async (_deployer, _network, accounts) => {
  const wizardPresale = await WizardPresale.deployed();
  const inauguralGateKeeper = await InauguralGateKeeper.deployed();
  const wizardGuild = await WizardGuild.deployed();

  const coo = accounts[2];
  const guildmaster = accounts[0];
  const gatekeeper = InauguralGateKeeper.address;
  const minter = InauguralGateKeeper.address;
  const tournament = BasicTournament.address;

  // Can be done/called *only* once
  await wizardPresale.setGatekeeper(gatekeeper, {
    from: guildmaster, // guildmaster only
  });

  // Can be done/called *only* once
  // 5974 = number of wizards in series; enjorced by contract
  await wizardGuild.openSeries(minter, 5974, {
    from: coo, // COO only
  });

  // Can be done/called *only* once
  await inauguralGateKeeper.registerTournament(tournament, {
    from: coo, // COO only
  });
};
