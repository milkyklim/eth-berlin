import { BigInt, BigDecimal } from '@graphprotocol/graph-ts';
import {
  WizardPresale,
  StartBlockChanged,
  Transfer,
  Approval,
  ApprovalForAll,
  WizardSummoned,
  WizardAlignmentAssigned,
} from '../generated/WizardPresale/WizardPresale';
import { Wizard } from '../generated/schema';

export function handleStartBlockChanged(event: StartBlockChanged): void {}

export function handleTransfer(event: Transfer): void {}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleWizardSummoned(event: WizardSummoned): void {
  let wizardPresaleContract = WizardPresale.bind(event.address);
  let id = event.transaction.hash.toHex();

  let wizard = new Wizard(id);
  let tokenId = event.params.tokenId.toI32();
  let element = event.params.element;
  let power = event.params.power;

  let cost = wizardPresaleContract.powerToCost(power);
  let owner = event.transaction.from;
  let blockNumber = event.block.number;

  wizard.tokenId = tokenId;
  wizard.element = element;
  wizard.power = power
    .div(BigInt.fromI32(1000000))
    .div(BigInt.fromI32(1000000))
    .toI32(); // 1e12;
  wizard.owner = owner;
  wizard.costWei = cost
    .div(BigInt.fromI32(1000000))
    .div(BigInt.fromI32(1000000));

  wizard.blockNumber = blockNumber;

  wizard.save();
}

export function handleWizardAlignmentAssigned(
  event: WizardAlignmentAssigned,
): void {}
