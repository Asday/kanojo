import { createSelector } from 'reselect';

const listingSelector = (state) => state.listing

export const isLoadingSelector = createSelector(
  listingSelector,
  (listing) => listing.isLoading
)
