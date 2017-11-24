import { head, tail } from 'lodash';

export const READ = 'listings/READ'
export const read = ({ URL, title, coverURL }) => ({
  type: READ,
  payload: {
    URL,
    title,
    coverURL,
  }
})

export const REQ_LOAD_LISTINGS = 'listings/REQ_LOAD_LISTINGS'
export const REQ_LOAD_LISTINGS_SUCCESS = 'listings/REQ_LOAD_LISTINGS_SUCCESS'
export const REQ_LOAD_LISTINGS_FAILURE = 'listings/REQ_LOAD_LISTINGS_FAILURE'
export const loadListings = () => (dispatch) => {
  dispatch({
    type: REQ_LOAD_LISTINGS,
    payload: {},
  })

  // TODO:  Fetch the directory page.
  // TODO:  Parse how many pages there are.
  // TODO:  Build a list of URLs to fetch, one per page.
}

export const REQ_LOAD_LISTINGS_PAGE = 'listings/REQ_LOAD_LISTINGS_PAGE'
export const REQ_LOAD_LISTINGS_PAGE_SUCCESS =
  'listings/REQ_LOAD_LISTINGS_PAGE_SUCCESS'
export const REQ_LOAD_LISTINGS_PAGE_FAILURE =
  'listings/REQ_LOAD_LISTINGS_PAGE_FAILURE'
export const loadListingsPage = (pageURL, nextPageURLs) => (dispatch) => {
  dispatch({
    type: REQ_LOAD_LISTINGS_PAGE,
    payload: {
      pageURL,
    },
  })

  fetch(pageURL)
    .then((data) => {
      // TODO:  Parse `data` into [{title: '', coverURL: '', URL: ''}].
      dispatch({
        type: REQ_LOAD_LISTINGS_PAGE_SUCCESS,
        payload: data,
      })

      if (!!nextPageURLS.length) {
        dispatch(loadListingsPage(head(nextPageURLs), tail(nextPageURLs)))
      }
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
