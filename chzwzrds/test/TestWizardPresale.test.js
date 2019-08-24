const WizardPresale = artifacts.require('WizardPresale');

const { NEUTRAL_WIZARD_COST } = require('../utils/constants');
const { getWizardIds } = require('../utils/helpers');

contract('Wizard Presale', () => {
  let wizardPresale;

  before(async () => {
    wizardPresale = await WizardPresale.deployed();
  });

  it('Conjure wizard', async function() {
    // summon 2 neutral wizards
    const wizards = await wizardPresale.conjureWizardMulti([1], {
      value: NEUTRAL_WIZARD_COST,
    });

    const tokenIds = getWizardIds(wizards);
    // check that wizard is neutral
    const power = web3.utils.hexToNumber(
      (await wizardPresale.getWizard(tokenIds[0]))['power'],
    );
  });
});
