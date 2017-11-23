import { map, unionBy } from 'lodash'
import { combineReducers } from 'redux'

import { READ } from '../actions/listing'
import {
  NAVIGATE_TO_NEXT_PAGE,
  NAVIGATE_TO_PAGE,
  NAVIGATE_TO_PREVIOUS_PAGE,
  REQ_LOAD_PAGE,
  REQ_LOAD_PAGE_DATA,
  REQ_LOAD_PAGE_DATA_FAILURE,
  REQ_LOAD_PAGE_DATA_SUCCESS,
  REQ_LOAD_PAGE_FAILURE,
  REQ_LOAD_PAGE_SUCCESS,
} from '../actions/reader'

const initialURL = null
const URL = (state = initialURL, { type, payload }) => {
  switch (type) {
    case READ:

    return payload.URL
  }

  return state
}

const initialCurrentPage = 0
const currentPage = (state = initialCurrentPage, { type, payload }) => {
  switch (type) {
    case NAVIGATE_TO_NEXT_PAGE:

    return state + 1

    case NAVIGATE_TO_PREVIOUS_PAGE:

    return state - 1

    case NAVIGATE_TO_PAGE:

    return payload.index
  }

  return state
}

const initialIsPageDataLoading = false
const isPageDataLoading = (
    state = initialIsPageDataLoading,
    { type, payload }) => {
  switch (type) {
    case REQ_LOAD_PAGE_DATA:

    return true

    case REQ_LOAD_PAGE_DATA_SUCCESS:
    case REQ_LOAD_PAGE_DATA_FAILURE:

    return false
  }

  return state
}

const initialPages = []
const pages = (state = initialPages, { type, payload }) => {
  switch (type) {
    case REQ_LOAD_PAGE_DATA_SUCCESS:

    return unionBy([payload], state, 'index')

    case REQ_LOAD_PAGE:

    return map(state, (value) => (
      value.index === payload.index
        ? { ...value, loading: true }
        : value
    ))

    case REQ_LOAD_PAGE_SUCCESS:

    return map(state, (value) => (
      value.index === payload.index
        ? { ...value, loading: false, imageData: payload.imageData }
        : value
    ))

    case REQ_LOAD_PAGE_FAILURE:

    return map(state, (value) => (
      value.index === payload.index
        ? { ...value, loading: false }
        : value
    ))
  }

  return state
}

export const reader = combineReducers({
  URL,
  currentPage,
  isPageDataLoading,
  pages,
})

const exampleState = {
  URL: 'https://example.com/hero_aca/',
  currentPage: 0,
  isPageDataLoading: false,
  pages: [
    {
      index: 0,
      imageURL: 'https://example.com/image.jpg',
      imageData: '',  // b64 encoded image?
      loading: false,
    },
    // ...
  ],
}
