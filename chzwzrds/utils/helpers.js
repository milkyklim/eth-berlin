const getWizardIds = wizards =>
  wizards['logs']
    .filter(w => w['event'] === 'WizardSummoned')
    .map(w => web3.utils.hexToNumber(w['args']['tokenId']));

module.exports = {
  getWizardIds,
};
