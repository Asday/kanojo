export const LISTINGS_LOADED = 'listings/LISTINGS_LOADED'
export const loadListings = () => (dispatch) => {
  // Dispatch optimistic stuff, set off long running tasks, dispatch their results...

  dispatch({
    type: LISTINGS_LOADED,
    payload: {},
  })
}
