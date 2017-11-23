export const REQ_LOAD_LISTINGS = 'listings/REQ_LOAD_LISTINGS'
export const REQ_LOAD_LISTINGS_SUCCESS = 'listings/REQ_LOAD_LISTINGS_SUCCESS'
export const REQ_LOAD_LISTINGS_FAILURE = 'listings/REQ_LOAD_LISTINGS_FAILURE'
export const loadListings = () => (dispatch) => {
  dispatch({
    type: REQ_LOAD_LISTINGS,
    payload: {},
  })

  fetch('https://example.com')
    .then((data) => {
      dispatch(loadListingsPage(data))
    })
    .catch((error) => {
      dispatch({
        type: REQ_LOAD_LISTINGS_FAILURE,
        payload: {
          error,
        },
      })
    })
}

export const REQ_LOAD_LISTINGS_PAGE = 'listings/REQ_LOAD_LISTINGS_PAGE'
export const REQ_LOAD_LISTINGS_PAGE_SUCCESS =
  'listings/REQ_LOAD_LISTINGS_PAGE_SUCCESS'
export const REQ_LOAD_LISTINGS_PAGE_FAILURE =
  'listings/REQ_LOAD_LISTINGS_PAGE_FAILURE'
export const loadListingsPage = (pageURL) => (dispatch) => {
  dispatch({
    type: REQ_LOAD_LISTINGS_PAGE,
    payload: {},
  })

  fetch(pageURL)
    .then((data) => {
      // Parse `data` into [{title: '', coverURL: '', URL: ''}].
      dispatch({
        type: REQ_LOAD_LISTINGS_PAGE_SUCCESS,
        payload: data,
      })
    })
    .catch((error) => {
      dispatch({
        type: REQ_LOAD_LISTINGS_PAGE_FAILURE,
        payload: {
          error,
        },
      })
    })
}
