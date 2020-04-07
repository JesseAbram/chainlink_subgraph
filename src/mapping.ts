import { AnswerUpdated } from '../generated/chainlink Aggregators/chainlinkAggregator'
import { updatedAnswer } from '../generated/schema'

export function handleAnswerUpdated(event: AnswerUpdated): void {
  let id = event.address.toHexString().concat("-").concat(event.params.answerId.toString())
  let updated = new updatedAnswer(id)
  updated.current = event.params.current
  updated.answerId = event.params.answerId.toI32(),
  updated.contract = event.address
  updated.timestamp = event.block.timestamp.toI32(),

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
