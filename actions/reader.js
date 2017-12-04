export const NAVIGATE_TO_NEXT_PAGE = 'reader/NAGIVATE_TO_NEXT_PAGE'
export const navigateToNextPage = () => ({
  type: NAVIGATE_TO_NEXT_PAGE,
  payload: {},
})

export const NAVIGATE_TO_PREVIOUS_PAGE = 'reader/NAVIGATE_TO_PREVIOUS_PAGE'
export const navigateToPreviousPage = () => ({
  type: NAVIGATE_TO_PREVIOUS_PAGE,
  payload: {},
})

export const NAVIGATE_TO_PAGE = 'reader/NAVIGATE_TO_PAGE'
export const navigateToPage = ({ index }) => ({
  type: NAVIGATE_TO_PAGE,
  payload: {
    index,
  },
})

export const REQ_LOAD_PAGE_DATA = 'reader/REQ_LOAD_PAGE_DATA'
export const REQ_LOAD_PAGE_DATA_SUCCESS = 'reader/REQ_LOAD_PAGE_DATA_SUCCESS'
export const REQ_LOAD_PAGE_DATA_FAILURE = 'reader/REQ_LOAD_PAGE_DATA_FAILURE'
export const loadPageData = (URL) => (dispatch) => {
  dispatch({
    type: REQ_LOAD_PAGE_DATA,
    payload: {},
  })

  // TODO:  Fetch the page listing page.
  // TODO:  Fetch each of the page pages.  (Good lord).
  // TODO:  Parse the image URL from the page page.
}

export const REQ_LOAD_PAGE = 'reader/REQ_LOAD_PAGE'
export const REQ_LOAD_PAGE_SUCCESS = 'reader/REQ_LOAD_PAGE_SUCCESS'
export const REQ_LOAD_PAGE_FAILURE = 'reader/REQ_LOAD_PAGE_FAILURE'
export const loadPage = ({ index, imageURL }) => (dispatch) => {
  dispatch({
    type: REQ_LOAD_PAGE,
    payload: {
      index,
    },
  })

  // TODO:  Prefetch image.
}
