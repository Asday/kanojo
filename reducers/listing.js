import { unionBy } from 'lodash';
import { combineReducers } from 'redux'

import {
  REQ_LOAD_LISTINGS_SUCCESS,
  REQ_LOAD_LISTINGS_FAILURE,
  REQ_LOAD_LISTINGS_PAGE_SUCCESS,
} from '../actions/listing'

const initialIsLoading = true
const isLoading = (state = initialIsLoading, { type }) => {
  switch (type) {
    case REQ_LOAD_LISTINGS_SUCCESS:

    return false
  }

  return state
}

const initialIsAnyLoaded = false
const isAnyLoaded = (state = initialIsAnyLoaded, { type }) => {
  switch (type) {
    case REQ_LOAD_LISTINGS_PAGE_SUCCESS:

    return true
  }

  return state
}

const initialIsErrored = false
const isErrored = (state = initialIsErrored, { type }) => {
  switch (type) {
    case REQ_LOAD_LISTINGS_FAILURE:

    return true
  }

  return state
}

initialItems = []
const items = (state = initialItems, { type, payload }) => {
  switch (type) {
    case REQ_LOAD_LISTINGS_PAGE_SUCCESS:

    return unionBy(payload, state, 'URL')
  }
  return state
}

export const listing = combineReducers({
  isLoading,
  isAnyLoaded,
  isErrored,
  items,
})

const exampleState = {
  isLoading: false,
  isAnyLoaded: true,
  isErrored: false,
  items: [
    {
      title: 'Boku no Hero Academia',
      coverURL: 'https://example.com/image.jpg',
      URL: 'https://example.com/hero_aca/',
    },
    // ...
  ],
}
