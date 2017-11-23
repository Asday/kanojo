import { combineReducers } from 'redux'

import { listing } from './listing'
import { reader } from './reader'

export const root = combineReducers({
  listing,
  reader,
})
