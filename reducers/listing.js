import { combineReducers } from 'redux'

import { LISTINGS_LOADED } from '../actions/listing'

const initialIsLoading = true
const isLoading  = (state = initialIsLoading, { type }) => {
  switch (type) {
    case LISTINGS_LOADED:
      return false
  }

  return state
}

export const listing = combineReducers({
  isLoading,
})
