import { combineReducers } from 'redux'

import { listing } from './listing'
import { navigation } from './navigation'
import { reader } from './reader'

export const root = combineReducers({
  listing,
  reader,
  navigation,
})
