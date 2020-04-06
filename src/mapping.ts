import { AnswerUpdated } from '../generated/chainlink Aggregators/chainlinkAggregator'
import { updatedAnswer } from '../generated/schema'

export function handleAnswerUpdated(event: AnswerUpdated): void {
  let id = event.address.toHexString().concat("-").concat(event.params.current.toString())
  let updated = new updatedAnswer(id)
  updated.current = event.params.current
  updated.answerId = event.params.answerId
  updated.contract = event.address

  updated.save()
}

// - event: ChainlinkCancelled(indexed bytes32)
//           handler: handleNewTradeClose
//         - event: ChainlinkFulfilled(indexed bytes32)
//           handler: handleNewLiquidate
//         - event: ChainlinkRequested(indexed bytes32)
//           handler: handleAddCollateral
//         - event: OwnershipRenounced(indexed address)
//           handler: handleFrontRunning
//         - event: OwnershipTransferred(indexed address,indexed address)
//           handler: handleUpdateLiquidity
//         - event: ResponseReceived(indexed int256,indexed uint256,indexed address)
//           handler: handleResponseReceived
// export function handleNewTradeClose(event: TradeClose): void {
//   let id = event.address.toHexString().concat("-").concat(event.params._tradeId.toString())
//   let trade = new Trade(id)
//   trade.tradeId = event.params._tradeId
//   trade.exchange = event.address
//   trade.tradeOpen = false
//   trade.tradeOwner = event.params._tradeOwner
//   trade.isLong = event.params._isLong
//   trade.collateral = event.params._collateral
//   trade.protectedAssetOpenPrice = event.params._protectedAssetOpenPrice
//   trade.assetPrice = event.params._assetPrice
//   trade.stablePrice = event.params._stablePrice
//   trade.redemptionAmount = event.params._redemptionAmount
//   trade.timestamp = event.params._timestamp
//   trade.referral = event.params._referral
//   trade.save()
// }



// export function handleNewLiquidate(event: TradeLiquidate): void {
//   let liquidation = new Liquidation(event.transaction.hash.toHex())
//   liquidation.exchange = event.address
//   liquidation.tradeId = event.params._tradeId
//   liquidation.tradeOwner = event.params._tradeOwner
//   liquidation.liquidator = event.params._liquidator
//   liquidation.liquidatorReturn = event.params._liquidatorReturn
//   liquidation.liqTraderReturn = event.params._liqTraderReturn
//   liquidation.timestamp = event.params._timestamp
//   liquidation.save()
// }

// export function handleAddCollateral(event: AddCollateral): void {
//   let addCollateral = new Collateral(event.transaction.hash.toHex())
//   addCollateral.exchange = event.address
//   addCollateral.tradeId = event.params._tradeId
//   addCollateral.tradeOwner = event.params._tradeOwner
//   addCollateral.addedCollateral = event.params._addedCollateral
//   addCollateral.assetPrice = event.params._assetPrice
//   addCollateral.stablePrice = event.params._stablePrice
//   addCollateral.save()
// }

// export function handleFrontRunning(event: FrontRunning): void {
//   let frontrunning = new FrontRunningCase(event.transaction.hash.toHex())
//   frontrunning.exchange = event.address
//   frontrunning.tradeId = event.params._tradeId
//   frontrunning.tradeOwner = event.params._tradeOwner
//   frontrunning.protectedOpenPrice = event.params._protectedOpenPrice
//   frontrunning.save()

// }

// export function handleUpdateLiquidity(event: UpdateLiquidity): void {
//   let updateLiquidity = new LiquidityAddition(event.transaction.hash.toHex())
//   updateLiquidity.exchange = event.address
//   updateLiquidity.provider = event.params._provider
//   updateLiquidity.assetTokenAmount = event.params._assetTokenAmount
//   updateLiquidity.stableTokenAmount = event.params._stableTokenAmount
//   updateLiquidity.LSTPrice = event.params._LSTPrice
//   updateLiquidity.LiquidityMinted = event.params._LiquidityMinted
//   updateLiquidity.addedLiquidity = event.params._addedLiq
//   updateLiquidity.timestamp = event.params._timestamp
//   updateLiquidity.save()
// }



