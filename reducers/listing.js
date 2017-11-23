import { combineReducers } from 'redux'

const initialIsLoading = true
const isLoading  = (state = initialIsLoading, { type, payload }) => {
  switch (type) {
  }

  return state
}

export const listing = combineReducers({
  isLoading,
})
